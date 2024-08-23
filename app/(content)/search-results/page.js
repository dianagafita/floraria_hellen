// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import ItemCard from "@/components/items/item-card";

// export default function SearchResults() {
//   const router = useRouter();
//   const { query } = router.query;
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (query) {
//         try {
//           const response = await fetch(`/api/search/${query}`);
//           if (response.ok) {
//             const data = await response.json();
//             setResults(data);
//           } else {
//             console.error("Failed to search products", response.status);
//           }
//         } catch (error) {
//           console.error("Failed to search products", error);
//         }
//       }
//     };

//     fetchResults();
//   }, [query]);

//   return (
//     <div>
//       {results.length > 0 ? (
//         <ItemCard images={results} moreStyle="searchItem" />
//       ) : (
//         <p>No items found</p>
//       )}
//     </div>
//   );
// }
// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import ItemCard from "@/components/items/item-card";

// export default function SearchResults() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (query) {
//         try {
//           const response = await fetch(`/api/search/${query}`);
//           if (response.ok) {
//             const data = await response.json();
//             setResults(data);
//           } else {
//             console.error("Failed to search products", response.status);
//           }
//         } catch (error) {
//           console.error("Failed to search products", error);
//         }
//       }
//     };

//     fetchResults();
//   }, [query]);

//   return (
//     <div>
//       {results.length > 0 ? (
//         <ItemCard images={results} moreStyle="searchItem" type="search" />
//       ) : (
//         <p>No items found</p>
//       )}
//     </div>
//   );
// }
// Import Suspense and other necessary components
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ItemCard from "@/components/items/item-card";

// This component is wrapped in a Suspense boundary to handle client-side data fetching
function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          const response = await fetch(`/api/search/${query}`);
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          } else {
            console.error("Failed to search products", response.status);
          }
        } catch (error) {
          console.error("Failed to search products", error);
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      {results.length > 0 ? (
        <ItemCard images={results} moreStyle="searchItem" type="search" />
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

// Main component with Suspense boundary
export default function SearchResults() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchResultsContent />
    </Suspense>
  );
}
