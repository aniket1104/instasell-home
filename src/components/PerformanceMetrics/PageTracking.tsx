import React from "react";
import { pageTracking } from "../../types/types";
import { FC } from "react";
import drawer from "../../assets/logos/drawer.svg";
import eye from "../../assets/logos/eye.svg";

const PageTracking: FC<pageTracking> = ({
  title,
  description,
}: pageTracking) => {
  const metrics = [
    {
      id: 1,
      title: "Orders",
      value: 80,
      icon: drawer,
      bgColor: "#FFEBD5",
    },
    {
      id: 2,
      title: "Tracking Page Views",
      value: 44,
      icon: eye,
      bgColor: "#FFC879",
    },
  ];

  return (
    <div className={`max-w-[480px] border-2 mb-10 rounded-lg p-4 bg-[#FFFFFF]`}>
      <h6 className="text-[14px] text-primaryText font-medium my-2">{title}</h6>
      <p className="text-[13px] text-primaryText font-normal mb-5">
        {description}
      </p>
      <div className="flex flex-col space-y-5 mt-16">
        {metrics?.map((item, index) => (
          <div
            className={`flex justify-between p-4 rounded-lg ${
              item?.id === 1 ? "bg-[#FFEBD5]" : "bg-[#FFC879]"
            }`}
            key={index}
          >
            <div>
              <h6 className="text-[14px] text-primaryText font-medium">
                {item?.title}
              </h6>
              <h1 className="text-3xl text-primaryText font-semibold">
                {item?.value}
              </h1>
            </div>
            <div className="mt-3">
              <img src={item?.icon} alt="alt" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageTracking;
