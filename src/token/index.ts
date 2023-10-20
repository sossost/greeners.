export const vars = {
  fontFamily: {
    default: "Pretendard, sans-serif",
  },
  fontSize: {
    xxxs: "8px",
    xss: "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeight: {
    default: "1.5",
    button: "2.5",
    input: "2.5",
  },
  borderRadius: {
    default: "6px",
    full: "9999px",
  },
  colors: {
    accent: "#507771",
    black: "#323232",
    darkGray: "#333333",
    gray: "#707070",
    lightGray: "#E6E7E8",
    mainFont: "#414141",
    pale: "#E2FFFA",
    pastel: "#DEFAF1",
    primary: "#66A07D",
    secondary: "#93BFA9",
    warn: "#FF0000",
    white: "#FFFFFF",
  },
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1440,
  },
};

export type Breakpoint = "mobile" | "tablet" | "desktop" | "largeDesktop";
