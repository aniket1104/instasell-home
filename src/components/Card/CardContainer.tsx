import { cardContainer } from "../../types/types";
import { FC } from "react";
import Card from "./Card";
import Danger from "../../assets/logos/danger.svg";
import Information from "../../assets/logos/infomation.svg";

const CardContainer: FC<cardContainer> = ({ title }: cardContainer) => {
  const cardLength = [
    {
      title: "Order Sync Successful!",
      description:
        "Your order details from the last 30 days have been successfully synced. Check them out now!",
      buttonTitle: "Explore Your Orders",
      bgColor: "#FFFFFF",
      showCopyButton: false,
      icon: Danger,
    },
    {
      title: "Customize Customer Notification",
      description:
        "Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers",
      buttonTitle: "Configure Notifications",
      bgColor: "#FFF8DB",
      showCopyButton: false,
      icon: Danger,
    },
    {
      title: "Your Tracking Link has been generated",
      description: "Include the Link to Your Store's Navigation Menu.",
      buttonTitle: "Go To Navigation Menu",
      bgColor: "#EAF4FF",
      showCopyButton: true,
      icon: Information,
    },
  ];

  return (
    <div>
      <div className="py-5 px-[5vw] bg-[#FFFDFA]">
        <h3 className="text-2xl font-semibold pt-5 pb-8 text-primaryText">
          {title}
        </h3>
        <div className="flex space-x-5 pb-5">
          {cardLength?.map((item, index) => (
            <div key={index}>
              <Card
                title={item?.title}
                description={item?.description}
                buttonTitle={item?.buttonTitle}
                className={item?.bgColor}
                showCopyButton={item?.showCopyButton}
                icon={item?.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
