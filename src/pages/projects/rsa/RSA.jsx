import React, { useEffect, useState } from "react";

function is_prime(n) {
  if (n <= 1) {
    return false;
  }

  // check divisiblity from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const RSA = () => {
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [p_value, set_p_value] = useState(61);
  const [q_value, set_q_value] = useState(53);

  useEffect(() => {
    console.log(p_value);
    console.log(q_value);
  }, [p_value, q_value]);

  const p = p_value;
  const q = q_value;

  const n = p * q;

  // euler's totient
  const phi = (p - 1) * (q - 1);

  // public key
  const e = 17;

  // private key
  const d = modInverse(e, phi);

  // modular inverse
  function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) return x;
    }
    return null;
  }

  // encrypt
  const encrypt = (message) => {
    let encrypted = "";
    message = message.trim();
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      let cipher = modExp(charCode, e, n);
      encrypted += cipher + " ";
    }
    return encrypted;
  };

  // decrypt
  const decrypt = (encryptedMessage) => {
    const encryptedChars = encryptedMessage.split(" ");
    let decrypted = "";
    encryptedChars.forEach((cipher) => {
      let decryptedCharCode = modExp(parseInt(cipher), d, n);
      decrypted += String.fromCharCode(decryptedCharCode);
    });
    return decrypted;
  };

  // moular exponential
  function modExp(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  }

  // handle encrytping
  const handleEncrypt = () => {
    if (p_value >= 11) {
      if (is_prime(p_value) && is_prime(q_value)) {
        const encrypted = encrypt(message);
        setEncryptedMessage(encrypted);
      } else {
        setEncryptedMessage("please make p and q values prime");
      }
    } else {
      setEncryptedMessage("please enter p and q values above 10");
    }
  };

  // handle decrypting
  const handleDecrypt = () => {
    const decrypted = decrypt(encryptedMessage);
    setDecryptedMessage(decrypted);
  };

  const handlePValue = (event) => {
    const newPValue = event.target.value;

    set_p_value(newPValue);
  };

  const handleQValue = (event) => {
    const newQValue = event.target.value;

    set_q_value(newQValue);
  };

  return (
    <div>
      <div>rsa encryption</div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="write the text"
      />
      <button onClick={handleEncrypt}>encrypt</button>

      <div>
        <div>encrypted text:</div>
        <div>{encryptedMessage || "no encrypted text yet"}</div>
      </div>

      <button onClick={handleDecrypt}>decrypt it</button>

      <div>
        <div>decrypted text:</div>
        <div>{decryptedMessage || "no decrypted text yet"}</div>
      </div>

      <div>
        <input type="number" value={p_value} onChange={handlePValue} />
        <input type="number" value={q_value} onChange={handleQValue} />
      </div>
    </div>
  );
};

export default RSA;
