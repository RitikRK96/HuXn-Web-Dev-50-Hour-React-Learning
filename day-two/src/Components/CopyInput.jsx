import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (inputValue.trim() === "") {
      alert("Please enter text before copying!");
      return;
    }

    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="copyInput">
      <h2>Copy Your Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something here..."
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} inputValue={inputValue} />
    </div>
  );
};

export default CopyInput;
