import { useContext } from "react";
import { ThemeContext } from "../../App";
import './Footer.css'

function Footer() {
  const theme = useContext(ThemeContext);
  const className = `footer-${theme}`;
  return <div className={`${className} footer`} >{`Theme: ${theme}`}</div>;
}

export default Footer;
