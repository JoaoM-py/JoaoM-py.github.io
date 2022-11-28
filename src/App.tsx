import { createContext, useState } from "react";
import { Home } from "./pages/Home";


export const themeContext = createContext(null)

function App() {

  const [theme] = useState("dark")

  // const themeButton = () => {
  //   setTheme((crr) => (crr ==="light" ? "dark" : "light"))
  // };

  return (
    <div className="app" id={theme}>
      <Home/>
    </div>
  );
}

export default App;
