import { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  // useRef() hook:
  const passwordRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0, 11);

    // window.navigator.clipboard.writeText(password).then(
    //   () => alert("Password copied to clipboard!"),
    //   (err) => console.error(err)
    // );
  }, []);

  // useCallback() hook:
  const generatePassword = useCallback(() => {
    let password = "";
    let characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) characterSet += "0123456789";
    if (includeSpecialChars) characterSet += "!@#$%&+-*/_";

    for (let i = 1; i <= length; i++) {
      password += characterSet.charAt(
        Math.floor(Math.random() * characterSet.length)
      );
    }

    setPassword(password);
  }, [length, includeNumbers, includeSpecialChars, setPassword]);

  // useEffect() hook:
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mt-10 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            className="outline-none w-full py-2 px-3"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Password"
          />

          <button
            className="outline-none bg-blue-700 text-white px-3 py0.5 shrink-0"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={24}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumbers}
              id="numberInput"
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeSpecialChars}
              id="charInput"
              onChange={() => {
                setIncludeSpecialChars((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
