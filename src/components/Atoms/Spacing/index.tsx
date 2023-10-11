import { memo } from "react";
import { coerceValueToCssPixel } from "@/utils";

interface SpacingProps {
  direction?: "vertical" | "horizontal";
  size: number | string;
}

export const Spacing = memo(function Spacing({
  direction = "vertical",
  size,
  ...props
}: SpacingProps) {
  return (
    <div
      css={{
        flex: "none",
        width:
          direction === "horizontal" ? coerceValueToCssPixel(size) : undefined,
        height:
          direction === "vertical" ? coerceValueToCssPixel(size) : undefined,
      }}
      {...props}
    />
  );
});
