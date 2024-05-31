export const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h2",
  h4: "h2",
  "body-t":"p",
  "body-u":"p",
  "body-m": "p",
  "body-r": "p",
  "body-s": "p",
  "caption-s": "p",
  "caption-v": "p",
};

export type TypographyVariant = keyof typeof variantMapping;

export type TypographyColors =
  | "white"
  | "black"
  | "primary"
  | "primary-light-100"
  | "secondary"
  | "secondary-100"
  | "success"
  | "error"
  | "info"
  | "warn"
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
  | "special"
  | "apicolor";

export type TypographyAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify";

export type TypographyFontWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export type TypographyFont = "CabinetGrotesk";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  color?: TypographyColors;
  fontWeight?: TypographyFontWeight;
  gutterBottom?: boolean;
  align?: TypographyAlign;
  noWrap?: boolean;
  underline?: "none" | "always" | "hover";
  customClassName?: string;
  children?: React.ReactNode;
  font?: TypographyFont;
}
