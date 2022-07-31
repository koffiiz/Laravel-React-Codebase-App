import React from "react";

export default function select({
  name,
  handleChange,
  options
}) {

  return (
      <div className="flex flex-col items-start">
        <select
          onChange={handleChange}
          className="
          form-select form-select-sm
          appearance-none
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          {
            options.map(option => {
             return (
              <option
                name={name}
                value={option.language}
                key={option.language_code}
                data-code={option.language_code}
              >
                {option.language}
              </option>
             )
            })
          }
        </select>
      </div>
  );
}
