import { useContext } from "react";
import { ThemeContext } from "../../App";
import './Header.css'

function Header({ setTheme }) {
  const theme = useContext(ThemeContext);
  const className = `header-${theme}`;
  return (
    <div className={className}>
      <h1>Theme Context App</h1>
      <button
        className={`btn-${theme} btn-always`}
        onClick={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Header;
