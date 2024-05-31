
import { ButtonProps } from "@utils/button/index.types";


export interface buttonCopyProps extends ButtonProps {
  label?: string;
  labelCustomClassName?: string;
  errorMsg?: string;
  name?: string;
  customClass?: string;
}
