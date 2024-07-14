// // export default function Search({ inputChanges, pChanges }) {
// //   return (
// //     <form className="w-full text-[#cdcdcd] text-center h-[3rem] my-10">
// //       <p
// //         className={` text-[#cdcdcd] font-[300] text-[15px] mx-4 py-1 ${pChanges}`}
// //       >
// //         <input
// //           type="text"
// //           id="title"
// //           name="title"
// //           placeholder="Cauta..."
// //           className={`focus:outline-none ${inputChanges} placeholder-[#cdcdcd] w-[50%] border-b border-black px-5 py-1`}
// //         />
// //       </p>
// //     </form>
// //   );
// // }
// // "use client";
// // import ItemCard from "@/components/items/item-card";
// // import { useState } from "react";

// // export default function Search({ inputChanges, pChanges }) {
// //   const [query, setQuery] = useState("");
// //   const [results, setResults] = useState([]);

// //   const handleSearch = async (event) => {
// //     const value = event.target.value;
// //     setQuery(value);

// //     if (value.length > 2) {
// //       // Start searching after 3 characters
// //       try {
// //         const response = await fetch(`/api/search/${value}`);
// //         if (response.ok) {
// //           const data = await response.json();
// //           setResults(data);
// //         } else {
// //           console.error("Failed to search products", response.status);
// //         }
// //       } catch (error) {
// //         console.error("Failed to search products", error);
// //       }
// //     } else {
// //       setResults([]);
// //     }
// //   };

// //   return (
// //     <div>
// //       <form className="w-full text-black text-center h-[3rem] my-10">
// //         <p
// //           className={`text-black font-[300] text-[15px] mx-4 py-1 ${pChanges}`}
// //         >
// //           <input
// //             type="text"
// //             id="title"
// //             name="title"
// //             placeholder="Cauta..."
// //             className={`focus:outline-none ${inputChanges} placeholder-[#606060] w-[50%] border-b border-black px-5 py-1`}
// //             value={query}
// //             onChange={handleSearch}
// //           />
// //         </p>
// //       </form>
// //       <div>
// //         <ItemCard images={results} moreStyle="searchItem" />{" "}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import ItemCard from "@/components/items/item-card";
// import { useState } from "react";

// export default function Search({ inputChanges, pChanges }) {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false); // New state to track if a search has been performed

//   const handleSearch = async (event) => {
//     const value = event.target.value;
//     setQuery(value);

//     if (value.length > 2) {
//       // Start searching after 3 characters
//       setHasSearched(true); // Set hasSearched to true when a search is performed
//       try {
//         const response = await fetch(`/api/search/${value}`);
//         if (response.ok) {
//           const data = await response.json();
//           setResults(data);
//         } else {
//           console.error("Failed to search products", response.status);
//         }
//       } catch (error) {
//         console.error("Failed to search products", error);
//       }
//     } else {
//       // Clear results if input length is 2 or less
//       setResults([]);
//       setHasSearched(false); // Reset hasSearched when the input is cleared or less than 3 characters
//     }
//   };

//   return (
//     <div>
//       <form className="w-full text-black text-center h-[3rem] my-10">
//         <p
//           className={`text-black font-[300] text-[15px] mx-4 py-1 ${pChanges}`}
//         >
//           <input
//             type="text"
//             id="title"
//             name="title"
//             placeholder="Cauta..."
//             className={`focus:outline-none ${inputChanges} placeholder-[#606060] w-[50%] md:w-[30%] border-b border-black px-5 py-1`}
//             value={query}
//             onChange={handleSearch}
//           />
//         </p>
//       </form>
//       <div>
//         {results.length > 0 ? (
//           <ItemCard images={results} moreStyle="searchItem" />
//         ) : (
//           hasSearched && <p>No items found</p> // Only show message if a search has been performed
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import ItemCard from "@/components/items/item-card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search({ inputChanges, pChanges }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state to track if a search has been performed
  const router = useRouter(); // Initialize router

  const handleSearch = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      // Start searching after 3 characters
      setHasSearched(true); // Set hasSearched to true when a search is performed
      try {
        const response = await fetch(`/api/search/${value}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          console.error("Failed to search products", response.status);
        }
      } catch (error) {
        console.error("Failed to search products", error);
      }
    } else {
      // Clear results if input length is 2 or less
      setResults([]);
      setHasSearched(false); // Reset hasSearched when the input is cleared or less than 3 characters
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.length > 2) {
      router.push(`/search-results?query=${query}`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full text-black text-center h-[1rem] my-5 flex items-center"
      >
        <p className={`text-black font-[300] text-[15px]  py-1 ${pChanges}`}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Cauta..."
            className={`focus:outline-none ${inputChanges} placeholder-[#606060] w-full bordr-b border-black  py-1`}
            value={query}
            onChange={handleSearch}
          />
        </p>
      </form>
      <div>
        {results.length > 0 ? (
          <ItemCard images={results} moreStyle="searchItem" />
        ) : (
          hasSearched && <p>No items found</p> // Only show message if a search has been performed
        )}
      </div>
    </div>
  );
}
