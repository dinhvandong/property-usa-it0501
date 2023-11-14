import React from "react";
import PropertyItemView from "./PropertyItemView";

const TopProperty = () => {
  const data = [
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
    { title: "Item 3", description: "Description 3" },
    { title: "Item 4", description: "Description 4" },
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
    { title: "Item 3", description: "Description 3" },
    { title: "Item 4", description: "Description 4" },
    
    // Add more data items as needed
  ];
  return (
    <div className="w-full mt-5 h-auto flex justify-center">
      <PropertyItemView data={data} />
    </div>
  );
};

export default TopProperty;
