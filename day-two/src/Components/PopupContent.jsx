import { createPortal } from 'react-dom';

const PopupContent = ({ copied, inputValue }) => {
  return createPortal( 
    <div>
      {copied && (
        <div className="popup">
          <p>Copied to clipboard!</p>
          <p>Content copied is: {inputValue}</p>
        </div>
      )}
    </div>,
    document.querySelector("#popup")
  );
};

export default PopupContent;
