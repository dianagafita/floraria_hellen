"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import ItemCard from "@/components/items/item-card";
import SortItems from "@/components/util/sort-items";
import { sortItems } from "@/hooks/useSortItems"; // Custom hook or function to handle sorting logic

export default function SortableFlowerList({
  flowers,
  flowerType,
  type,
  subtype,
}) {
  const [sortedFlowers, setSortedFlowers] = useState(flowers);
  const [sortOption, setSortOption] = useState("Recomandare");

  // Sort flowers whenever the sorting option changes
  useEffect(() => {
    setSortedFlowers(sortItems([...flowers], sortOption));
  }, [sortOption, flowers]);

  // Handle sorting option change
  const handleSortChange = (option) => {
    console.log("SORT");
    setSortOption(option);
  };

  return (
    <div>
      <SortItems
        nrOfProducts={sortedFlowers.length}
        onSortChange={handleSortChange}
      />
      <ItemCard
        images={sortedFlowers}
        type={type}
        flowerType={flowerType}
        subtype={subtype}
      />
    </div>
  );
}
