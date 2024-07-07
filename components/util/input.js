// // // import React from "react";

// // import { getCurrentDate, getDateForOffer } from "./currDate";

// // export default function Input({ name, label, type, options = [], dateType }) {
// //   const orderDate = getCurrentDate();
// //   const offerDate = getDateForOffer();
// //   return (
// //     <p
// //       className={`px-5 my-2 w-full ${
// //         type === "checkbox"
// //           ? "flex flex-row-reverse items-center justify-center "
// //           : "flex flex-col"
// //       }`}
// //     >
// //       <label htmlFor={name} className="my-2 text-sm md:text-base">
// //         {label}
// //       </label>
// //       {type === "select" ? (
// //         <select
// //           id={name}
// //           name={name}
// //           className="font-thin border border-black p-2 rounded-sm h-[3rem] text-[#555555]"
// //         >
// //           {options.map((option, index) => (
// //             <option key={index} value={option.value}>
// //               {option.label}
// //             </option>
// //           ))}
// //         </select>
// //       ) : type === "textarea" ? (
// //         <textarea
// //           id={name}
// //           name={name}
// //           placeholder={label}
// //           rows={4}
// //           className="font-thin border border-black p-2 rounded-sm  text-[#555555] text-sm md:text-base"
// //         />
// //       ) : (
// //         <input
// //           type={type}
// //           min={dateType === "order" ? orderDate : offerDate}
// //           placeholder={label}
// //           className={`${
// //             type === "checkbox" ? "w-6 h-6 mx-3" : ""
// //           } font-thin border border-black p-2 rounded-sm h-[3rem] text-[#555555] text-sm md:text-base `}
// //           id={name}
// //           name={name}
// //         />
// //       )}
// //     </p>
// //   );
// // }
// import React from "react";
// import { getCurrentDateTime } from "./currDate";

// export default function Input({ name, label, type, options = [], dateType }) {
//   const orderDateTime = getCurrentDateTime();

//   return (
//     <p
//       className={`px-5 my-2 w-full ${
//         type === "checkbox"
//           ? "flex flex-row-reverse items-center justify-center"
//           : "flex flex-col"
//       }`}
//     >
//       <label htmlFor={name} className="my-2 text-sm md:text-base">
//         {label}
//       </label>
//       {type === "select" ? (
//         <select
//           id={name}
//           name={name}
//           className="font-thin border border-black p-2 rounded-sm h-[3rem] text-[#555555]"
//         >
//           {options.map((option, index) => (
//             <option key={index} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//       ) : type === "textarea" ? (
//         <textarea
//           id={name}
//           name={name}
//           placeholder={label}
//           rows={4}
//           className="font-thin border border-black p-2 rounded-sm text-[#555555] text-sm md:text-base"
//         />
//       ) : (
//         <input
//           type={type}
//           min={dateType === "order" ? orderDateTime : null}
//           placeholder={label}
//           className={`${
//             type === "checkbox" ? "w-6 h-6 mx-3" : ""
//           } font-thin border border-black p-2 rounded-sm h-[3rem] text-[#555555] text-sm md:text-base`}
//           id={name}
//           name={name}
//         />
//       )}
//     </p>
//   );
// }
import React from "react";
import { getCurrentDate, getDateForOffer, getNextDay } from "./currDate";

export default function Input({
  name,
  label,
  type,
  options = [],
  dateType,
  ...props
}) {
  const { today, time } = getCurrentDate();
  const offerDate = getDateForOffer();
  const nextDay = getNextDay();
  const minDate = dateType === "order" ? nextDay : offerDate;

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
          name={name}
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
          placeholder={label}
          rows={4}
          className="font-thin border border-black p-2 rounded-sm  text-[#555555] text-sm md:text-base"
        />
      ) : (
        <input
          {...props}
          type={type}
          min={minDate}
          placeholder={label}
          className={`${
            type === "checkbox" ? "w-6 h-6 mx-3" : ""
          } font-thin border border-black p-2 rounded-sm h-[2.5rem] text-[#555555] text-sm md:text-base `}
          id={name}
          name={name}
        />
      )}
    </p>
  );
}
