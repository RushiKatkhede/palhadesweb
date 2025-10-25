import { createContext, useContext, useState } from "react";

type Mode = "B2B" | "B2C";

const ServiceModeContext = createContext<{
  mode: Mode;
  toggleMode: () => void;
}>({
  mode: "B2B",
  toggleMode: () => {},
});

export const ServiceModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("B2B");

  const toggleMode = () => {
    setMode((prev) => (prev === "B2B" ? "B2C" : "B2B"));
  };

  return (
    <ServiceModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ServiceModeContext.Provider>
  );
};

export const useServiceMode = () => useContext(ServiceModeContext);
