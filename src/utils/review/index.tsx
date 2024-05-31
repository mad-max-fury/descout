import { Typography } from "@utils/typography";
import React from "react";

export interface reviewProps {
  text1?: string;
  text2?: string;
  icon?: React.ReactNode;
}

export default function Review(prop: reviewProps) {
  const { text1, text2, icon } = prop;
  return (
    <div className="p-[12px] border rounded-md flex flex-col gap-4">
      <div>
        <Typography>{text1}</Typography>
      </div>
      <div className="flex items-center justify-between">
        {icon}
        <Typography>{text2}</Typography>
      </div>
    </div>
  );
}
