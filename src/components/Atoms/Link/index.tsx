import {
  Link as LinkComponent,
  LinkProps as LinkComponentProps,
} from "react-router-dom";

interface LinkProps extends LinkComponentProps {
  children: React.ReactNode;
  openInNewTab?: boolean;
}

export const Link = ({
  children,
  openInNewTab = false,
  ...props
}: LinkProps) => {
  return (
    <LinkComponent
      css={{
        textDecoration: "none",
        color: "inherit",
        "@media screen and (min-width: 1024px)": {
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
