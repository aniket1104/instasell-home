import React, { useState } from "react";
import { metricContainer } from "../../types/types";
import { FC } from "react";
import PieChart from "./PieChart";
import PageTracking from "./PageTracking";
import TextContent from "./TextContent";

const MetricContainer: FC<metricContainer> = ({ title }: metricContainer) => {
  const [selectedButton, setSelectedButton] = useState("Lifetime");

  const buttonTitle = [
    {
      title: "Lifetime",
      bgColor: "#E5A500",
    },
    {
      title: "Last Week",
      bgColor: "#956F00",
    },
    {
      title: "Last Month",
      bgColor: "#5E4200",
    },
    {
      title: "Last Year",
      bgColor: "#FFDDB6",
    },
    {
      title: "Customize Time Line",
      bgColor: "#FFC879",
    },
  ];

  return (
    <div className="py-5 px-[5vw] bg-[#FFF7EE]">
      <h3 className="text-2xl font-semibold pt-5 pb-8 text-primaryText">
        {title}
      </h3>
      <div className="flex space-x-3 overflow-x-scroll no-scrollbar w-full mb-8 ">
        {buttonTitle?.map((item, index) => (
          <button
            className={`text-[12px] font-semibold text-primaryText py-2 px-3 ${
              selectedButton === item?.title
                ? "bg-[#F8F7FF] border-2 border-[#8051FF]"
                : "bg-[#FFF]"
            }  rounded-md whitespace-nowrap`}
            onClick={() => setSelectedButton(item?.title)}
            key={index}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <div className="flex space-x-5">
        <PieChart title="Shipment Update" orderValue="396" />
        <TextContent />
        <PageTracking
          title="Tracking Page Views Vs Orders"
          description="Understand user engagement patterns and optimize your tracking page for enhanced customer experiences."
        />
      </div>
    </div>
  );
};

export default MetricContainer;
