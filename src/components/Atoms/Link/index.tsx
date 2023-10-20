import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";
import {
  Link as LinkComponent,
  LinkProps as LinkComponentProps,
} from "react-router-dom";

interface LinkProps extends LinkComponentProps {
  children: React.ReactNode;
  openInNewTab?: boolean;
  underLine?: boolean;
}

export const Link = ({
  children,
  openInNewTab = false,
  underLine = false,
  ...props
}: LinkProps) => {
  return (
    <LinkComponent
      css={{
        display: "flex",
        alignItems: "center",
        textDecoration: underLine ? "underline" : "none",
        color: "inherit",
        [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
          cursor: "pointer",
          "&:hover": {
            opacity: 0.7,
            transition: "opacity 0.2s ease-in-out",
          },
        },
      }}
      target={openInNewTab ? "_blank" : "_self"}
      {...props}
    >
      {children}
    </LinkComponent>
  );
};
