import { FC } from "react";
import { verticalTile } from "../../types/types";

const VerticalTile: FC<verticalTile> = ({
  title,
  description,
  buttonTitle,
  htmlTextArea,
  colorSelector,
}: verticalTile) => {
  const colorPalleteData = [
    {
      id: 1,
      labelText: "Accent Color",
      placeholderText: "FF9898",
      colorBoxCode: "#FF9898",
    },
    {
      id: 2,
      labelText: "Text Color",
      placeholderText: "571010",
      colorBoxCode: "#571010",
    },
    {
      id: 3,
      labelText: "Background Color",
      placeholderText: "FFEAEA",
      colorBoxCode: "#FFEAEA",
    },
  ];

  return (
    <div className={`max-w-[360px] border-2 mb-10 rounded-lg p-4 bg-[#FFFFFF]`}>
      <h6 className="text-[14px] text-primaryText font-medium my-2">{title}</h6>
      <p className="text-[13px] text-primaryText font-normal mb-5">
        {description}
      </p>
      {htmlTextArea && (
        <div className="mt-[90px]">
          <label className="text-[13px] text-primaryText font-normal my-2">
            HTML Link
          </label>
          <textarea
            className="text-[13px] text-primaryText font-normal block w-full rounded-md border-2 h-[100px] p-2"
            placeholder="Value"
          />
        </div>
      )}
      {colorSelector && (
        <div>
          {colorPalleteData?.map((item, index) => (
            <div key={index}>
              <label className="text-[13px] text-primaryText font-normal my-2">
                {item?.labelText}
              </label>
              <div className="mb-2 flex justify-between">
                <input
                  type="text"
                  placeholder={item?.placeholderText}
                  className="text-[13px] mt-1 text-primaryText font-normal block w-[75%] rounded-md border-2 px-2 py-1"
                />
                <div
                  className={`rounded-md mt-1 w-[60px] ${
                    item?.id === 1
                      ? "bg-[#FF9898]"
                      : item?.id === 2
                      ? "bg-[#571010]"
                      : "bg-[#FFEAEA]"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex space-x-2 mt-4">
        <button className="text-[12px] text-primaryText py-1 px-3 bg-[#FFFFFF] rounded-md border-2 ">
          Preview
        </button>
        <button className="text-[12px] text-secondaryText py-1 px-3 bg-[#303030] rounded-md">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default VerticalTile;
