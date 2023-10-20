import { memo } from "react";
import { vars } from "@/token";
import { coerceValueToCssPixel } from "@/utils";

interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  spacing?: number | string;
  length?: number | string;
  lineColor?: string;
}

export const Line = memo(function Line({
  direction = "horizontal",
  spacing = 0,
  length = "100%",
  lineColor = vars.colors.lightGray,
  ...props
}: LineProps) {
  return (
    <div
      css={{
        width:
          direction === "horizontal" ? coerceValueToCssPixel(length) : "1px",
        height:
          direction === "vertical" ? coerceValueToCssPixel(length) : "1px",
        margin:
          direction === "horizontal"
            ? `${coerceValueToCssPixel(spacing)} 0`
            : `0 ${coerceValueToCssPixel(spacing)}`,
        backgroundColor: lineColor,
      }}
      {...props}
    />
  );
});
