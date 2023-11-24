import React from "react";

const Input = ({
  id,
  label,
  type,
  isRequired,
  placeholder,
  value = '',
  onChange,
  items,
  name,
  showLabel = true,
  disabled = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-base font-medium leading-5 text-black"
      >
        {showLabel && (
          <span>
            {label}
            {isRequired && <span className="text-red-500"> * </span>}{" "}
          </span>
        )}
      </label>
      <div className={`mt-1 flex gap-5 ${!showLabel && "mt-6"}`}>
        {(type === "text" || type === "number") && (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            className="block rounded-md border w-full border-light-gray py-2 px-3 text-gray placeholder:text-gray"
          />
        )}
        {type === "radio" &&
          items?.map(({ id, name, label, value= '', selectedVal = '' }) => (
            <div
              key={id}
              className="flex gap-2 mt-2 text-gray font-normal text-sm"
            >
              <input
                className="scale-150 border-light-gray cursor-pointer"
                type="radio"
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                checked={selectedVal == value}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Input;
