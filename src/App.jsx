import { useState, createContext } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import AppContent from "./components/AppContent/AppContent";
import Footer from "./components/Footer";

export const UserContext = createContext(null);
export const ThemeContext = createContext(null)

function App() {
  const userName = "Bob";
  const [theme, setTheme] = useState("light")
  return (
    <>
      <UserContext.Provider value={userName}>
        <UserProfile />
      </UserContext.Provider>
      <ThemeContext value={theme}>
        <Header setTheme={setTheme}/>
        <AppContent />
        <Footer />
      </ThemeContext>
    </>
  );
}

export default App;
