import React, { useContext } from "react";
import { State } from "../context/statecontext";

const Header = () => {
  const { handlePrint } = useContext(State);

  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div className="flex items-center justify-start w-20">
          <img
            src="https://missing-someone.onrender.com/static/media/ajaylogo.71fa906f25ee5d96ffd4.png"
            alt=""
            className="h-20 mr-4 p-2 m-6"
          />
        </div>
        <div className="flex items-center justify-between flex-wrap font-bold text-6xl">
          INVOICE
        </div>
        {/* 
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Download
              </button>
            </li>
            <li>
              <button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">
                Send
              </button>
            </li>
          </ul>
        </div> */}
      </header>
    </>
  );
};
export default Header; // Default export
