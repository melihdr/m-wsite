import React, { useEffect, useState } from "react";
import "../../../styles/caesar.css";

function CaesarCipher() {
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

    if (!shifting_value) {
      set_encrypted_text("please enter a valid shifting number");
    } else {
      set_encrypted_text(encrypt(newText, shifting_value));
    }
  };

  const handleShiftingValueChange = (event) => {
    const raw = event.target.value;
    set_shifting_value(raw);

    if (!raw) {
      set_encrypted_text("please enter a valid shifting number");
    } else {
      set_encrypted_text(encrypt(text, raw));
    }
  };

  return (
    <>
      <div className="caesar_page">
        <div className="caesar_inside">
          <div className="caesar_title">Caesar Cipher Algorithm</div>
          <hr />
          <div className="caesar_first_grid">
            <div className="caesar_text_area">
              <div style={{ fontWeight: "bold", fontSize: "11px" }}>
                write your text below
              </div>
              <textarea
                className="caesar_input"
                type="text"
                value={text}
                onChange={handleChange}
              />
            </div>
            <div className="caesar_encrypted_text_div">
              <div style={{ fontWeight: "bold", fontSize: "11px" }}>
                encrypted text
              </div>
              <div className="caesar_encrypted_text_area">{encrypted_text}</div>
            </div>
          </div>
          <div>
            <div>enter the shifting value</div>
            <input
              className="caesar_shifting_input"
              type="number"
              min={0}
              max={300}
              value={shifting_value}
              id="number"
              onChange={handleShiftingValueChange}
            />
          </div>
          <div className="caesar-third-grid">
            <div className="caesar-third-title">
              but, how it works actually?
            </div>
            <div>
              Caesar Cipher is a simple encryption technique where each letter
              in the plaintext(the text you want to encrypt) is shifted a
              certain number of places down the alphabet.
              <div>
                For example, with a shift of 3, A becomes D, B becomes E, and so
                on. After Z, the alphabet wraps around to A.
                <div>
                  Example: Plaintext: HELLO Shift: +3 Ciphertext(the encrypted
                  text): KHOOR
                </div>
              </div>
              <div>
                It's easy to use but also easy to break, since there are only 25
                possible shifts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaesarCipher;
