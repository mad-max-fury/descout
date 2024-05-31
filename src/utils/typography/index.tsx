import clsx from "clsx";
import { TypographyProps, variantMapping } from "./index.types";
import React from "react";
import { cva } from "class-variance-authority";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-h-1 mxs:text-h-2",
      h2: "text-h-2",
      h3:"text-h-m",
      h4:"text-h-4",
      "body-t":"text-body-t",
      "body-u":"text-body-u",
      "caption-v":"text-caption-v",
      "body-m": "text-body-m mxs:text-body-r",
      "body-r": "text-body-r mxs:text-body-s",
      "body-s": "text-body-s mxs:text-caption-s",
      "caption-s": "text-caption-s mxs:text-caption-s",
    },
    font: {
      CabinetGrotesk: "CabinetGrotesk",
    },
    color: {
      white: "text-white",
      black: "text-black",
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
      special: "text-special",
      info: "text-info",
      apicolor:"text-apicolor",
      success: "text-success-900",
      warn: "text-warning",
      error: "text-error",
      secondary: "text-secondary-main",
      primary: "text-primary-main",
      "primary-light-100": "text-primary-light-100",
      "secondary-100": "text-secondary-100",
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
    underline: { always: "underline", hover: "hover:underline", none: "" },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

// Typography component
const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant = "body-r",
    tag,
    underline = "none",
    fontWeight,
    gutterBottom,
    noWrap,
    align = "left",
    color = "primary",
    customClassName = "",
    font,
    children,
    ...rest
  } = props;

  // Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  // Classes
  const className = clsx(
    gutterBottom && "mb-4",
    noWrap && "overflow-hidden text-ellipsis whitespace-nowrap"
  );

  return (
    <Tag
      className={typography({
        intent: variant,
        underline,
        fontWeight,
        color,
        align,
        font,
        className: `${customClassName} ${className} `,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Typography };
export * from "./index.types";
