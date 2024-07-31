import React from "react";
import { getCurrentDate, getDateForOffer, getNextDay } from "./currDate";

export default function Input({
  name,
  label,
  type,
  options = [],
  dateType,
  value,
  placeholder,
  onChange,
  ...props
}) {
  const { today, time } = getCurrentDate();
  const offerDate = getDateForOffer();
  const nextDay = getNextDay();
  const minDate = dateType === "order" ? nextDay : offerDate;

  // Determine the default selected value for select input
  let defaultSelectedValue = "";
  if (type === "select") {
    const filteredOptions = options.filter((option) =>
      time >= "20:00" ? option.value >= "12:00" : true
    );

    defaultSelectedValue =
      filteredOptions.length > 0 ? filteredOptions[0].value : ""; // Set default to the first valid option or empty string
  }

  return (
    <p
      className={`px-2 my-2 w-full ${
        type === "checkbox"
          ? "flex flex-row-reverse items-center justify-center "
          : "flex flex-col"
      }`}
    >
      <label htmlFor={name} className="my-2 text-sm md:text-base">
        {label}
      </label>
      {type === "select" ? (
        <select
          {...props}
          id={name}
          required
          name={name}
          {...(name === "phone" ? { minLength: 8 } : {})}
          value={value}
          onChange={onChange}
          className="font-thin border border-black p-2 rounded-sm h-[2.5rem] text-[#555555]"
        >
          {options
            .filter((option) =>
              time >= "20:00" ? option.value >= "12:00" : true
            )
            .map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          {...props}
          id={name}
          name={name}
          placeholder={placeholder}
          rows={4}
          value={value}
          onChange={onChange}
          className=" focus:outline-none focus:ring focus:ring-violet-300 font-thin border border-black p-2 rounded-sm  text-[#555555] text-sm md:text-base"
          required
        />
      ) : (
        <input
          {...props}
          type={type}
          min={minDate}
          placeholder={placeholder}
          value={value}
          required
          onChange={onChange}
          className={`${
            type === "checkbox" ? "w-6 h-6 mx-3" : ""
          } focus:outline-none focus:border-[rgb(164,21,21)] focus:ring-1 focus:ring-[rgb(164,21,21)]   font-thin border border-black p-2 rounded-sm h-[2.5rem] text-[#555555] text-sm md:text-base `}
          id={name}
          name={name}
        />
      )}
    </p>
  );
}
