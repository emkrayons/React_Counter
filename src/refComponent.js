import React, { useRef } from "react";

function refComponent() {
  const inputRef = useRef(null);

  const handClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={handClick}>Focus Btn</button>
    </div>
  );
}

export default refComponent;
