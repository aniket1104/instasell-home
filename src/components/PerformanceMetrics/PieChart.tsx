import React, { useState } from "react";
import { pieChart } from "../../types/types";
import { FC } from "react";
import DoughNut from "./DoughNut";

const PieChart: FC<pieChart> = ({ title, orderValue }: pieChart) => {
  const [selectedButton, setSelectedButton] = useState("Delivered");
  //   console.log(selectedButton);

  const buttonTitle = [
    {
      title: "Delivered",
      bgColor: "#E5A500",
    },
    {
      title: "Out for Delivery",
      bgColor: "#956F00",
    },
    {
      title: "In Transit",
      bgColor: "#5E4200",
    },
    {
      title: "Pending",
      bgColor: "#FFDDB6",
    },
    {
      title: "Exception",
      bgColor: "#FFC879",
    },
  ];
  return (
    <div className={`max-w-[480px] border-2 mb-10 rounded-lg p-4 bg-[#FFFFFF]`}>
      <div className="flex justify-between my-1">
        <h6 className="text-[14px] text-primaryText font-semibold">
          Shipment Update
        </h6>
        <h6 className="text-[14px] text-primaryText font-medium">
          Total Order: {orderValue}
        </h6>
      </div>
      <div className="flex space-x-3 overflow-x-scroll no-scrollbar w-full my-2">
        {buttonTitle?.map((item, index) => (
          <button
            className={`text-[12px] font-semibold text-primaryText py-2 px-3 ${
              selectedButton === item?.title ? "bg-[#FFF1E3]" : "bg-[#F1F1F1]"
            }  rounded-md whitespace-nowrap`}
            onClick={() => setSelectedButton(item?.title)}
            key={index}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <DoughNut />
      <div className="flex space-x-5 mb-2 mt-4">
        {buttonTitle?.slice(0, 3)?.map((item, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <div
              className={`w-[20px] h-[10px] rounded-lg bg-[${item?.bgColor}]`}
            ></div>
            <h6 className="text-[14px] text-primaryText font-medium">
              {item?.title}
            </h6>
          </div>
        ))}
      </div>
      <div className="flex space-x-5 my-2">
        {buttonTitle?.slice(3, 5)?.map((item, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <div
              className={`w-[20px] h-[10px] rounded-lg bg-[${item?.bgColor}]`}
            ></div>
            <h6 className="text-[14px] text-primaryText font-medium">
              {item?.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
