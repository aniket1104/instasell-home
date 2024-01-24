import { FC } from "react";
import { tileContainer } from "../../types/types";
import VerticalTile from "./VerticalTile";
import HorizontalTile from "./HorizontalTile";

const TileContainer: FC<tileContainer> = ({ title }: tileContainer) => {
  const verticalTileData = [
    {
      title: "Elevate Your Brand Aesthetics with Custom Tracking Page Styles",
      description:
        "Immerse your customers in a branded experience by personalizing the colors on your tracking page. ",
      buttonTitle: "Apply Colors",
      htmlTextArea: false,
      colorSelector: true,
    },
    {
      title: "Seamlessly Integrate Custom HTML Elements",
      description:
        "Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.",
      buttonTitle: "Apply Changes",
      htmlTextArea: true,
      colorSelector: false,
    },
  ];

  const horizontalTileData = [
    {
      title: "Exclusive Onboarding Support for High-Volume Brands",
      description:
        "Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.",
      buttonTitle: "Schedule A Call",
      logoIncluded: false,
    },
    {
      title: "Explore Our Integrated Ecosystem",
      description:
        "Discover a variety of popular integrations tailored for your convenience. ",
      buttonTitle: "Explore Integrations",
      logoIncluded: true,
    },
  ];

  return (
    <div>
      <div className="py-5 px-[5vw] bg-[#FFFDFA]">
        <h3 className="text-2xl font-semibold pt-5 pb-8 text-primaryText">
          {title}
        </h3>
        <div className="flex space-x-5">
          <VerticalTile
            title={verticalTileData[0]?.title}
            description={verticalTileData[0]?.description}
            buttonTitle={verticalTileData[0]?.buttonTitle}
            htmlTextArea={verticalTileData[0]?.htmlTextArea}
            colorSelector={verticalTileData[0]?.colorSelector}
          />
          <div className="flex flex-col space-y-5">
            <HorizontalTile
              title={horizontalTileData[0]?.title}
              description={horizontalTileData[0]?.description}
              buttonTitle={horizontalTileData[0]?.buttonTitle}
              logoIncluded={horizontalTileData[0]?.logoIncluded}
            />
            <HorizontalTile
              title={horizontalTileData[1]?.title}
              description={horizontalTileData[1]?.description}
              buttonTitle={horizontalTileData[1]?.buttonTitle}
              logoIncluded={horizontalTileData[1]?.logoIncluded}
            />
          </div>
          <VerticalTile
            title={verticalTileData[1]?.title}
            description={verticalTileData[1]?.description}
            buttonTitle={verticalTileData[1]?.buttonTitle}
            htmlTextArea={verticalTileData[1]?.htmlTextArea}
            colorSelector={verticalTileData[1]?.colorSelector}
          />
        </div>
      </div>
    </div>
  );
};

export default TileContainer;
