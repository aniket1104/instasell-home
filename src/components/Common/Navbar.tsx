import { useState } from "react";
import DownArrow from "../../assets/logos/DownArrow.svg";
import Person from "../../assets/logos/Person.svg";
import Icon from "../../assets/logos/Icon.svg";

const Navbar = () => {
  const [selectedButton, setSelectedButton] = useState("Home");

  const navHeadings = [
    { title: "Home" },
    { title: "Orders" },
    { title: "Integrations" },
    { title: "Tracking Page" },
    { title: "Partner with Us" },
  ];

  const otherNavHeadings = [
    { title: "Account", icon: Person },
    { title: "Settings", icon: Icon },
  ];

  return (
    <div className="pt-5 pb-3 px-[5vw] bg-[#FFF]">
      <div className="flex justify-between">
        <ul className="flex space-x-10">
          {navHeadings?.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <li
                className="text-[14px] font-medium text-primaryText flex space-x-3"
                onClick={() => setSelectedButton(item?.title)}
              >
                {item?.title}{" "}
                {item?.title === "Tracking Page" && (
                  <img src={DownArrow} alt="down arrow" className="ml-2" />
                )}
              </li>
              {selectedButton === item?.title && (
                <hr className="w-[50%] border-2 border-[#8051FF] mt-1" />
              )}
            </div>
          ))}
        </ul>
        <ul className="flex space-x-10">
          <div className="relative">
            <input
              className="appearance-none border-b-2 pl-10 border-gray-300 w-[150px] py-2 px-3 text-[14px] focus:border-none"
              id="username"
              type="text"
              placeholder="Search"
            />
            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {otherNavHeadings?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer flex space-x-2 items-center"
            >
              <img src={item?.icon} alt="logo" />
              <li className="text-[14px] font-medium text-primaryText">
                {item?.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
