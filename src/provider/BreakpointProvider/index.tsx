import { createContext, useEffect, useState } from "react";

import { Breakpoint, vars } from "@/token";

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

      if (windowWidth >= vars.breakpoints.mobile) {
        newBreakpoint = "mobile";
      }

      if (windowWidth >= vars.breakpoints.tablet) {
        newBreakpoint = "tablet";
      }

      if (windowWidth >= vars.breakpoints.desktop) {
        newBreakpoint = "desktop";
      }

      if (windowWidth >= vars.breakpoints.largeDesktop) {
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
