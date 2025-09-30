import React, { createContext, useState, useEffect } from "react";

export const MobileScreenConext = createContext();

export function MobileScreenProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileScreenConext.Provider value={isMobile }>
      {children}
    </MobileScreenConext.Provider>
  );
}
