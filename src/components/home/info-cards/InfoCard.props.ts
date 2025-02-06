import { DetailedHTMLProps, HTMLAttributes } from "react";
// ReactNode

export interface InfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  border: boolean;
  text: string;
  textWeight: "300" | "400" | "500" | "600" | "700";
  bcColor: "grey" | "primary" | "beige" | "cappuccino";
}
