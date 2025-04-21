import React, { useState } from "react";
import "../../../styles/caesar.css";

function RSAEncryption() {
  const [encrypted_text, set_encrypted_text] = useState("");
  const [decrypted_text, set_decrypted_text] = useState("");
  const [text, setText] = useState("");
  const [shifting_value, set_shifting_value] = useState(3);

  const mod = (n, m) => ((n % m) + m) % m;

  const encrypt = (text, shift) => {
    let parsedShift = parseInt(shift, 10);

    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);

        // uppercase letters
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(mod(code - 65 + parsedShift, 26) + 65);
        }

        // lowercase
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(mod(code - 97 + parsedShift, 26) + 97);
        }

        return char;
      })
      .join("");
  };

  const decrypt = (text, shift) => {
    return encrypt(text, -shift);
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    set_encrypted_text(encrypt(newText, shifting_value));
  };

  const handleShiftingValueChange = (event) => {
    const raw = event.target.value;
    const parsedShift = parseInt(raw, 10);

    set_shifting_value(parsedShift);
    set_encrypted_text(encrypt(text, parsedShift));
  };

  return (
    <>
      <div className="caesar_page">
        <div className="caesar_inside">
          <div className="caesar_title">Caesar Cipher Algorithm</div>
          <hr />
          <div className="caesar_first_grid">
            <div className="caesar_text_area">
              <div style={{ fontWeight: "bold" }}>text:</div>
              <textarea
                className="caesar_input"
                type="text"
                value={text}
                onChange={handleChange}
              />
            </div>
            <div className="caesar_encrypted_text_div">
              <div style={{ fontWeight: "bold" }}>encrypted text:</div>
              <div className="caesar_encrypted_text_area">{encrypted_text}</div>
            </div>
          </div>
          <div>enter your shifting value</div>
          <input
            type="number"
            value={shifting_value}
            id="number"
            onChange={handleShiftingValueChange}
          />
        </div>
      </div>
    </>
  );
}

export default RSAEncryption;
