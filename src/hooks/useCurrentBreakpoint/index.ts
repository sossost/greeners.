import { useState, useEffect } from "react";
import { breakpoints } from "@/constants";

type Breakpoint = "mobile" | "tablet" | "desktop" | "largeDesktop";

const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("mobile");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newBreakpoint = "mobile";

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

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useCurrentBreakpoint;
