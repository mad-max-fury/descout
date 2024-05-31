import React from "react";

import { cva } from "class-variance-authority";

import { ButtonProps } from "./index.types";

import { CircularLoader } from "@utils/circularLoader";

import cn from "@utils/common";

export const button = cva("", {
  variants: {
    variant: {
      filled: "text-secondary-100",
      outlined: "!bg-white border",
      transparent: "!bg-transparent border",
      text: "!bg-transparent",
    },
    size: {
      large: "px-[12px] py-[6px]",
      tiny: "px-2 py-2",
      small: "px-[12px] py-[6px]",
      medium: " py-[15px] px-[28px]",
      "medium-with-icon": "px-8 py-3.5 pl-5",
      crap: "py-[18px] px-[16px]",
    },
    color: {
      wood1: "text-woodsmoke-50",
      wood2: "text-woodsmoke-100",
      wood3: "text-woodsmoke-200",
      wood4: "text-woodsmoke-300",
      wood5: "text-woodsmoke-400",
      wood6: "text-woodsmoke-500",
      wood7: "text-woodsmoke-600",
      wood8: "text-woodsmoke-700",
      wood9: "text-woodsmoke-800",
      wood10: "text-woodsmoke-950",
      star1: "text-star-dust-50",
      star2: "text-star-dust-100",
      star3: "text-star-dust-200",
      star4: "text-star-dust-300",
      star5: "text-star-dust-400",
      star6: "text-star-dust-500",
      star7: "text-star-dust-600",
      star8: "text-star-dust-700",
      star9: "text-star-dust-800",
      star10: "text-star-dust-900",
      white: "text-white",
      primary: "text-black",
      apicolor: "text-apicolor",
      link: "text-blue-ribbon-700",
      secondary:
        "bg-secondary-main !text-primary-main border border-secondary-main",
      success: "bg-success",
      error: "bg-error",
      info: "bg-error",
      buttonColor: "bg-mirage-950",
      "primary-light-100": "bg-primary-light-100 !text-primary-main",
    },
    fontWeight: {
      thin: "font-thin",
      "extra-light": "font-extra-light",
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
  },
 
});


const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant,
    color = "primary",
    label = "",
    leftIcon,
    rightIcon,
    loading,
    customClassName = "",
    children,
    fontWeight = "semi-bold",
    fit,
    
    size = "large",
    type = "button", 
    ...rest
  } = props;

  return (
    <button
    className={button({
      variant,
      color,
      size,
      fontWeight,
      className: cn(
        "flex items-center rounded-md text-[0.875rem] gap-[0.625rem] justify-center whitespace-nowrap  transition-all duration-300 focus:ring-4 focus:ring-primary-light-200 focus-visible:outline-none disabled:cursor-not-allowed  ",
          rest.disabled ? "bg-gray-500":"",
          fit ? "w-fit" : "w-full",
          customClassName,
            ),
      })}
      type={type}
     
      {...rest}
      >
      {leftIcon && (
        <span
          className={cn("bg-[#fff]", rest.disabled && "[&>path]:stroke-gray-3")}
        >
          {leftIcon}
        </span>
      )}

      {label || children}

      {loading ? (
        <CircularLoader
          customClassName={cn(
            rest.disabled && "opacity-50 !text-primary-main/50"
          )}
        />
      ) : (
        <React.Fragment>
          {rightIcon && (
            <span className={cn(rest.disabled && "[&>path]:stroke-gray-3")}>
              {rightIcon}
            </span>
          )}
        </React.Fragment>
      )}
    </button>
  );
};

export { Button };
export * from "./index.types";
