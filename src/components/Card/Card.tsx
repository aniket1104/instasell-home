import { FC } from "react";
import { card } from "../../types/types";

const Card: FC<card> = ({
  title,
  description,
  buttonTitle,
  className,
  showCopyButton,
  icon,
}: card) => {
  return (
    <div
      className={`max-w-[320px] border-2 rounded-lg p-4 min-h-[160px] ${
        title === "Order Sync Successful!"
          ? "bg-[#FFFFFF]"
          : title === "Customize Customer Notification"
          ? "bg-[#FFF8DB]"
          : "bg-[#EAF4FF]"
      }`}
    >
      <div
        className={`${
          title === "Order Sync Successful!" ? "space-x-0" : "space-x-2"
        } flex`}
      >
        <img
          src={icon}
          alt="logo"
          className={`${
            title === "Order Sync Successful!" ? "hidden" : "block"
          }`}
        />
        <h6 className="text-[14px] text-primaryText font-medium my-2">
          {title}
        </h6>
      </div>

      <p className="text-[13px] text-primaryText font-normal mb-5">
        {description}
      </p>
      <div
        className={`flex space-x-2 ${
          title === "Your Tracking Link has been generated" ? "mt-10" : "mt-0"
        }`}
      >
        {showCopyButton && (
          <button className="text-[12px] text-primaryText py-1 px-3 bg-[#FFFFFF] rounded-md">
            Copy Link
          </button>
        )}
        <button className="text-[12px] text-secondaryText py-1 px-3 bg-[#303030] rounded-md">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default Card;
