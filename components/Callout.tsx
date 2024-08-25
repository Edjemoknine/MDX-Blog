import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "default" | "danger" | "warning";
};
const Callout = ({ children, type = "default", ...props }: Props) => {
  return (
    <div
      className={cn("rounded-lg p-3 my-3", {
        "bg-red-50 text-red-700": type === "danger",
        "bg-yellow-50 text-orange-600": type === "warning",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Callout;
