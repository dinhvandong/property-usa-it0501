/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Header = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-[60px]  flex flex-row justify-center">
        <div
          className="flex flex-row justify-between items-center  w-[80%] h-full
       "
        >
          {/* <img className='w-auto h-[20px]'
         src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
          alt='Properties logo'/> */}
          <nav className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center w-full h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-auto h-[20px]"
                      src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                      alt="Properties logo"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-5 flex items-baseline space-x-2">
                      <a
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        href="#"
                        className="text-black  px-2 py-2 rounded-md text-sm font-medium"
                      >
                        Buy
                      </a>
                      <a
                        href="#"
                        className="text-black   px-2 py-2 rounded-md text-sm font-medium"
                      >
                        Sell
                      </a>
                      <a
                        href="#"
                        className="text-black  px-2 py-2 rounded-md text-sm font-medium"
                      >
                        Rent
                      </a>
                      <a
                        href="#"
                        className="text-black   px-2 py-2 rounded-md text-sm font-medium"
                      >
                        Mortgage
                      </a>
                      <a
                        href="#"
                        className="text-black   px-2 py-2 rounded-md text-sm font-medium"
                      >
                        Find Realtors®
                      </a>
                      <a
                        href="#"
                        className="text-black   px-2 py-2 rounded-md text-sm font-medium"
                      >
                        My Home
                      </a>
                      <a
                        href="#"
                        className="text-black px-2 py-2 rounded-md text-sm font-medium"
                      >
                        News & Insights
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="w-auto flex flex-row items-center h-full">
            <button className="mr-4 underline">Manage rental</button>

            <button className="mr-10 underline">Advertise</button>

            <button className="mr-4">Login</button>
            <button className="mr-4 bg-black text-white py-1 px-5 rounded-xl">
              SignUp
            </button>
          </div>
        </div>
      </div>

      {showSubmenu && (
        <div className="w-full  h-[300px] bg-pink-400 rounded-bl-xl rounded-br-xl"></div>
      )}
    </div>
  );
};

export default Header;
