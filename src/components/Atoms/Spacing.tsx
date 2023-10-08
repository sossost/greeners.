import { memo } from "react";
import { coerceValueToCssPixel } from "@/utils/coerceValueToCssPixel";

interface SpacingProps {
  direction?: "vertical" | "horizontal";
  size: number | string;
}

const Spacing = memo(function Spacing({
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

export default Spacing;
