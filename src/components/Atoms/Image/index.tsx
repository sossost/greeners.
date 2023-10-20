import { vars } from "@/token";
import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  size: number | string;
}

export const Image = ({ src, alt, size, ...props }: ImageProps) => {
  return (
    <div
      css={{
        width: size,
        overflow: "hidden",
        backgroundColor: vars.colors.lightGray,
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        css={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
