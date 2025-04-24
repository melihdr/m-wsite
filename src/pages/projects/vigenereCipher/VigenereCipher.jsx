import React, { useState } from "react";
import "../../../styles/vigenere.css";

function VigenereCipher() {
  const [text, set_text] = useState("");
  const [encrypted_text, set_encrypted_text] = useState("");
  const [key_text, set_key_text] = useState("key");

  const vigenere_encrypt = (plaintext, key) => {
    let result = "";
    let j = 0;

    for (let i = 0; i < plaintext.length; i++) {
      const plaintext_char = plaintext[i];
      const key_char = key[j % key.length];

      if (plaintext_char >= "A" && plaintext_char <= "Z") {
        const shift = getShift(key_char, true);
        const encrypted_char = String.fromCharCode(
          ((plaintext_char.charCodeAt(0) - 65 + shift) % 26) + 65
        );
        result += encrypted_char;
        j++;
      } else if (plaintext_char >= "a" && plaintext_char <= "z") {
        const shift = getShift(key_char, false);
        const encrypted_char = String.fromCharCode(
          ((plaintext_char.charCodeAt(0) - 97 + shift) % 26) + 97
        );
        result += encrypted_char;
        j++;
      } else {
        result += plaintext_char;
      }
    }

    return result;
  };

  function getShift(key_char, is_upper) {
    if (key_char >= "A" && key_char <= "Z") {
      return key_char.charCodeAt(0) - 65;
    } else if (key_char >= "a" && key_char <= "z") {
      return key_char.charCodeAt(0) - 97;
    } else {
      return 0;
    }
  }

  const handleTextChange = (event) => {
    const newText = event.target.value;
    set_text(newText);

    if (!key_text) {
      set_encrypted_text("please enter a valid key");
    } else {
      set_encrypted_text(vigenere_encrypt(newText, key_text));
    }
  };

  const handleKeyTextChange = (event) => {
    const newKeyText = event.target.value;
    set_key_text(newKeyText);

    if (!newKeyText) {
      set_encrypted_text("please enter a valid key");
    } else {
      set_encrypted_text(vigenere_encrypt(text, newKeyText));
    }
  };

  return (
    <div className="vigenere_page">
      <div className="vigenere_inside">
        <div className="vigenere_title">Vigenère Cipher Algorithm</div>
        <hr />
        <div className="vigenere_grid">
          <div className="vigenere_text_area_div">
            <div style={{ fontWeight: "bold", fontSize: "11px" }}>
              write your text below
            </div>
            <textarea
              value={text}
              onChange={handleTextChange}
              type="text"
              className="vigenere_text_area"
            />
          </div>

          <div>
            <div style={{ fontWeight: "bold", fontSize: "11px" }}>
              encrypted text
            </div>
            <div className="vigenere_encrypted_text_div">{encrypted_text}</div>
          </div>
        </div>
        <div className="vigenere_get_key">
          <div>enter your key</div>
          <input
            className="vignere_get_key_input"
            onChange={handleKeyTextChange}
            value={key_text}
            type="text"
          />
        </div>
        <div className="vigenere_third_grid">
          <div className="vigenere_third_grid_title">
            but, how it actually works?
          </div>
          <div>
            <a
              className="vigenere_vikipedia_link"
              href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher"
              target="_blank"
            >
              The Vigenère{" "}
            </a>
            cipher is a method of encrypting alphabetic text using a simple form
            of polyalphabetic substitution. Unlike the Caesar cipher, which
            shifts each letter by the same amount, the Vigenère cipher uses a
            keyword to determine the shift for each letter in the message. Each
            letter of the keyword corresponds to a shift value, and the keyword
            is repeated as needed to match the length of the plaintext.
            <div>
              For example, if the keyword is "KEY" and the plaintext is "HELLO",
              the encryption shifts each letter in "HELLO" by the corresponding
              letter in "KEY" (repeated to match the length): K → H, E → E, Y →
              L, K → L, E → O. This makes the cipher more secure against
              frequency analysis, as the same letter in the plaintext can be
              encrypted to different letters depending on its position.
            </div>
            <div>
              Although the Vigenère cipher was once considered unbreakable, it
              can be cracked with modern cryptanalysis techniques, especially if
              the keyword is short or the plaintext is long. Nevertheless, it
              remains an important step in the history of cryptography and
              helped pave the way for more advanced encryption methods.
            </div>
          </div>
          <a className="vigenere_go_home_link" href="/">
            go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default VigenereCipher;
