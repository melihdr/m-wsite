import React, { useEffect, useState } from "react";
import "./rsa.css";

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
    if (p_value >= 10 && q_value >= 10) {
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
    if (
      p_value >= 10 &&
      q_value >= 10 &&
      is_prime(p_value) &&
      is_prime(q_value)
    ) {
      const decrypted = decrypt(encryptedMessage);
      setDecryptedMessage(decrypted);
    }
  };

  const handleChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);

    if (
      p_value >= 10 &&
      q_value >= 10 &&
      is_prime(p_value) &&
      is_prime(q_value)
    ) {
      setEncryptedMessage(encrypt(newMessage));
    } else {
      console.log("not working");
    }
  };

  const handlePValue = (event) => {
    const newPValue = event.target.value;
    set_p_value(newPValue);

    if (newPValue >= 11 && is_prime(newPValue)) {
      setEncryptedMessage(encrypt(message));
    } else {
      if (newPValue <= 11) {
        setEncryptedMessage("please make p and q values above 10");
        return;
      }
      if (!is_prime(newPValue)) {
        setEncryptedMessage("please make p and q values prime");
        return;
      }
    }
  };

  const handleQValue = (event) => {
    const newQValue = event.target.value;
    set_q_value(newQValue);

    if (newQValue >= 11 && is_prime(newQValue)) {
      setEncryptedMessage(encrypt(message));
    } else {
      setEncryptedMessage("no");
    }
  };

  return (
    <>
      <div className="rsa_page">
        <div className="rsa_inside">
          <div className="rsa_title">rsa encryption algorithm</div>
          <hr />
          <div className="rsa_first_grid">
            <div className="rsa_text_area">
              <div style={{ fontWeight: "bold", fontSize: "11px" }}>
                write your text below
              </div>
              <textarea
                className="rsa_input"
                type="text"
                value={message}
                onChange={handleChange}
              />
            </div>

            <div className="rsa_encrypted_text_div">
              <div style={{ fontWeight: "bold", fontSize: "11px" }}>
                encrypted text
              </div>
              <div className="rsa_encrypted_text_area">{encryptedMessage}</div>
            </div>
          </div>

          <div className="rsa_inputs_grid">
            <div>enter your p and q values</div>
            <input
              className="rsa_values_input"
              type="number"
              value={p_value}
              onChange={handlePValue}
            />
            <input
              className="rsa_values_input"
              type="number"
              value={q_value}
              onChange={handleQValue}
            />
          </div>

          <div className="rsa_third_grid">
            <div className="rsa_third_title">but, how it works actually? </div>
            <div>
              <div>
                <a
                  className="rsa_wikipedia_link"
                  href="https://en.wikipedia.org/wiki/RSA_cryptosystem"
                  target="_blank"
                >
                  RSA encryption
                </a>{" "}
                is an asymmetric cryptographic algorithm that enables secure
                communication over an insecure channel. It is based on the
                mathematical difficulty of factoring large prime numbers. In
                RSA, there are two keys: a public key (it's 17 in our example)
                and a private key. The public key is used for encryption and can
                be shared openly, while the private key is kept secret and is
                used for decryption.
              </div>
              <div>
                The RSA algorithm works as follows: First, two large prime
                numbers are chosen and multiplied together to form a semi-prime
                number. This number is used in the key generation process. The
                public key consists of the semi-prime number and another value
                derived from the primes, while the private key is linked to the
                original primes and is computationally difficult to derive from
                the public key.
              </div>
              <div>
                When data is encrypted using the public key, only the
                corresponding private key can decrypt it, ensuring
                confidentiality. Similarly, RSA can be used for digital
                signatures, where data is signed with the private key, and
                anyone with the public key can verify its authenticity, ensuring
                integrity and authenticity. The security of RSA depends on the
                fact that factoring a large semi-prime number into its prime
                factors is a problem that is computationally infeasible with
                current technology, making RSA a robust encryption method widely
                used in applications like secure email, online banking, and
                SSL/TLS protocols.
              </div>
              <a className="rsa_go_home_link" href="/">
                go home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RSA;
