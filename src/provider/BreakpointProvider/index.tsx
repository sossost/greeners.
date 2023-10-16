import { createContext, useEffect, useState } from "react";

import { Breakpoint, breakpoints } from "@/constants";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const BreakpointContext = createContext({
  breakpoint: null as Breakpoint | null,
});

export const BreakpointContextProvider = ({ children }: AuthProviderProps) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newBreakpoint = null;

      if (windowWidth >= breakpoints.mobile) {
        newBreakpoint = "mobile";
      }

      if (windowWidth >= breakpoints.tablet) {
        newBreakpoint = "tablet";
      }

      if (windowWidth >= breakpoints.desktop) {
        newBreakpoint = "desktop";
      }

      if (windowWidth >= breakpoints.largeDesktop) {
        newBreakpoint = "largeDesktop";
      }

      setBreakpoint(newBreakpoint as Breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!breakpoint) return null;

  return (
    <BreakpointContext.Provider value={{ breakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};
