interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const Title = ({ children, size = "medium", ...props }: TitleProps) => {
  return (
    <h1
      css={{
        fontWeight: "600",
        margin: "0 0 10px 0",
        ...TYPE_SIZES[size],
      }}
      {...props}
    >
      {children}
    </h1>
  );
};

const TYPE_SIZES = {
  small: {
    fontSize: "16px",
    lineheight: "20px",
  },
  medium: {
    fontSize: "20px",
    lineheight: "25px",
  },
  large: {
    fontSize: "24px",
    lineheight: "30px",
  },
};
