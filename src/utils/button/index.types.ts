import { TypographyFontWeight } from "../typography";

export enum ButtonVariants {
  filled = "filled",
  outlined = "outlined",
  text = "text",
  transparent = "transparent",
}

export type ButtonColors =
  | "primary"
  | "white"
  | "wood1"
  | "wood2"
  | "wood3"
  | "wood4"
  | "wood5"
  | "wood6"
  | "wood7"
  | "wood8"
  | "wood9"
  | "wood10"
  | "star1"
  | "star2"
  | "star3"
  | "star4"
  | "star5"
  | "star6"
  | "star7"
  | "star8"
  | "star9"
  | "star10"
  | "link"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "apicolor"
  | "primary-light-100";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariants;
  color?: ButtonColors;
  label?: React.ReactNode | string;
  hideLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fontWeight?: TypographyFontWeight;
  customClassName?: string;
  fit?: boolean;
  size?: "large" | "medium" | "medium-with-icon" | "small" | "tiny" | "crap";
  type?: "button" | "submit" | "reset";
}

// const t: string = ''
// const x = <number><unknown>t
// console.log(x)