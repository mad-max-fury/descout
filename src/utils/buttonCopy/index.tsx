import React from "react";
import { buttonCopyProps } from "./index.types";
import { CircularLoader } from "@utils/circularLoader";
import { button } from "@utils/button";

import cn from "@utils/common";

const ButtonCopy: React.FC<buttonCopyProps> = (props) => {
  const {
    errorMsg,
    labelCustomClassName,
    label,
    variant,
    color,
    size,
    fontWeight,
    customClassName,
    fit,
    name,
    leftIcon,
    children,
    loading,
    rightIcon,
    customClass,
    ...rest
  } = props;
  return (
    <>
      <div className={cn(`relative w-full z-0 flex flex-col `)}>
        {label && (
          <label
            className={cn(
              "mb-1 w-fit first-letter:capitalize text-[0.875rem]",
              errorMsg ? "text-error" : "",
              labelCustomClassName
            )}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            `relative w-full rounded-md border  focus-within:border-[#654EF2]`,
            label ? "px-2 " : "",
            customClass
          )}
        >
          <button
            className={button({
              variant,
              color,
              size,
              fontWeight,
              className: cn(
                "flex items-center justify-between rounded-md  text-[1rem] whitespace-nowrap disabled:cursor-not-allowed disabled:!border-gray-3 disabled:bg-gray-3 mmd:px-[3rem] mmd:py-[1.2rem]",
                customClassName,
                fit ? "w-fit" : "w-full"
                // ["text", "outlined"].includes(variant) ? "disabled:!text-gray-3 disabled:[&>path]:stroke-gray-3" : " disabled:!text-white"
              ),
            })}
            type="button"
            {...rest}
          >
            {leftIcon && (
              <span
                className={cn(
                  "bg-[#fff]",
                  rest.disabled && "[&>path]:stroke-gray-3"
                )}
              >
                {leftIcon}
              </span>
            )}

            {children}

            {loading ? (
              <CircularLoader
                customClassName={cn(
                  rest.disabled && "opacity-50 !text-primary-main/50"
                )}
              />
            ) : (
              <React.Fragment>
                {rightIcon && (
                  <span
                    className={cn(rest.disabled && "[&>path]:stroke-gray-3")}
                  >
                    {rightIcon}
                  </span>
                )}
              </React.Fragment>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonCopy;
