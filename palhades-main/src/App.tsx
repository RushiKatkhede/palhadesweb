import { ServiceModeProvider } from "./context/ServiceModeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ServiceModeProvider>
      <Home />
    </ServiceModeProvider>
  );
}

export default App;
