import React from "react";
export interface sideContainerProps {
  icon?: React.ReactNode;
  firstText?: string;
  secondText?: string;
}

export default function SideContainer(props: sideContainerProps) {
  const { icon, firstText, secondText } = props;
  return (
    <>
      <div className="border w-[207px] h-[93.25px] mmd:w-full  rounded-md ">
        <div className="flex gap-4 items-center py-[6px] px-[12px] bg-[#F9FAFB] border-b">
          {icon}
          {firstText}
        </div>
        <div className="flex items-center px-[12px] py-[10px]">
          {secondText}
        </div>
      </div>
    </>
  );
}
