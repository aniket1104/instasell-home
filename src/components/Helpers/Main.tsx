import { FC } from "react";
import { children } from "../../types/types";

const Main: FC<children> = ({
  children,
  className,
  superStyle,
  style,
}: children) => {
  return (
    <div className={"w-full " + superStyle}>
      <div
        style={style}
        className={"max-w-[1380px]  mx-auto px-[16px] md:px-[3vw] " + className}
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
