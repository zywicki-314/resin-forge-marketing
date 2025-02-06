import { DetailedHTMLProps, HTMLAttributes } from "react";
// ReactNode
export interface SmButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  color: "grey" | "primary";
  name: "facebook" | "instagram" | "linkdIn" | "mail" | "phone" | "other";
  href?: string;
}
