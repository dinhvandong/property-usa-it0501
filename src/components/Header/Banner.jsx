import React, { useState } from "react";

const Banner = () => {
  // const link_image = "https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg"

  //Buy
  // Rent
  // Sell
  // Pre-approval
  // Just sold
  // Home value

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic using the searchTerm
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <div
      className={`w-full z-1 h-[450px] flex justify-center bg-[url('https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg')] bg-cover bg-center`}
    >
      <div className="w-[40%] h-full z-10 mt-5">
        <p className="text-5xl w-full text-center font-bold text-white">
          The #1 site real estate professionals trust*
        </p>

        <nav>
          <ul className="font-bold mt-10 flex w-full flex-row justify-between space-x-4">
            <li>
              <a href="#" className="text-white">
                Buy
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Rent
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Sell
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Pre-approval
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Just sold
              </a>
            </li>

            <li>
              <a href="#" className="text-white">
                Home value
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-8 flex w-full flex-row justify-between">
          <input
            type="text"
            className="border border-gray-300 w-full rounded-md px-4 py-2 mr-2"
            placeholder="Address, School, City, Zip or Neighborhood
            "
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
