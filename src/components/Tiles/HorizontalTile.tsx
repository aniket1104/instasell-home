import { FC } from "react";
import { horizontalTile } from "../../types/types";
import Analytics from "../../assets/logos/googleAnalytics.svg";
import image4 from "../../assets/logos/image4.svg";
import instaFeed from "../../assets/logos/instaFeed.svg";
import Paypal from "../../assets/logos/Paypal.svg";
import Shopify from "../../assets/logos/Shopify.svg";

const HorizontalTile: FC<horizontalTile> = ({
  title,
  description,
  buttonTitle,
  logoIncluded,
}: horizontalTile) => {
  const logoArray = [
    {
      icon: Analytics,
    },
    {
      icon: image4,
    },
    {
      icon: instaFeed,
    },
    {
      icon: Paypal,
    },
    {
      icon: Shopify,
    },
  ];

  return (
    <div className={`max-w-[580px] border-2 rounded-lg p-4 bg-[#FFFFFF]`}>
      <h6 className="text-[14px] text-primaryText font-medium my-2">{title}</h6>
      <p className="text-[13px] text-primaryText font-normal mb-5">
        {description}
      </p>
      {logoIncluded && (
        <div className="flex space-x-3 mt-3 mb-8">
          {logoArray?.map((item, index) => (
            <img src={item?.icon} alt="logos" />
          ))}
        </div>
      )}
      <button className="text-[12px] text-secondaryText py-1 px-3 bg-[#303030] rounded-md">
        {buttonTitle}
      </button>
    </div>
  );
};

export default HorizontalTile;
