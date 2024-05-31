import React from "react";
import { Typography } from "@utils/typography";
import { performCompProps } from "./index.types";

const PerformComp: React.FC<performCompProps> = (props) => {
  const { count, header, icon, text, color } = props;

  return (
    <>
      <div className="p-[24px] border">
        <div className="flex flex-col gap-[45px]">
          <div className="flex justify-between items-center">
            <Typography variant="body-r" fontWeight="bold" color="star10" customClassName="mxxs:font-bold">
              {header}
            </Typography>
            {icon}
          </div>
          <div className="flex justify-between items-center">
            <Typography variant="h2" fontWeight="bold" color="wood9">
              {count}
            </Typography>
            <div style={{ color }}>{text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PerformComp };
