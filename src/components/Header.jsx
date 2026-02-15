import { useContext } from "react";
import { ThemeContext } from "../App";


function Header({setTheme}) {
    const theme = useContext(ThemeContext)
  return (
    <div>
      <h1>Theme Context App</h1>
      <button onClick={setTheme(theme == "light" ? "dark" : "light `")}>Toggle Theme</button>
    </div>
  );
}

export default Header