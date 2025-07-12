import React from "react";

function Button({ text, fn }) {
  return (
    <button
      className="mx-auto px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200"
      onClick={fn}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
 