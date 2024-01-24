import React from "react";

const TextContent = () => {
  return (
    <div
      className={`max-w-[340px] border-2 mb-10 rounded-lg p-4 bg-[#956F00] pr-12`}
    >
      <h6 className="text-[14px] text-[#FFF] font-medium my-1">
        Star Facts about your orders!!!
      </h6>
      <p className="text-[13px] text-[#FFF] font-normal mb-5">
        There are 8 shipments that have been in out for delivery for more than 3
        days.
      </p>
      <p className="text-[13px] text-[#FFF] font-normal mb-5">
        There are 5 shipments in exception right now
      </p>
      <p className="text-[13px] text-[#FFF] font-normal mb-5">
        The maximum chargebacks are from Miami.
      </p>
      <button className="text-[12px] mt-[150px] text-[#303030] py-1 px-3 bg-[#FFF] font-medium rounded-md">
        Check Order Page
      </button>
    </div>
  );
};

export default TextContent;
