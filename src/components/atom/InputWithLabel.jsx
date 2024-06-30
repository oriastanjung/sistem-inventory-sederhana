import clsx from "clsx";
import React from "react";

function InputWithLabel({label, placeholder, value, onChange, id, name, isRequired, type, className}) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-lg font-medium" htmlFor={id}>{label}</label>
      <input
        className={clsx(className,"rounded-lg px-3 py-2 text-black")}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  );
}

export default InputWithLabel;
