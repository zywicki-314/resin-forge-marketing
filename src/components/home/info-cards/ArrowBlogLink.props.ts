import { DetailedHTMLProps, HTMLAttributes } from "react";
// ReactNode
export interface ArrowToBlogProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  path?: string;
}
