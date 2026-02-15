import { useState, createContext } from "react";
import "./App.css";
import UserProfile from "./components/part1/UserProfile";
import Header from "./components/Header/Header";
import AppContent from "./components/AppContent/AppContent";
import Footer from "./components/Footer/Footer";
import ThemeContextApp from "./components/ThemeContextApp/ThemeContextApp";


export const UserContext = createContext(null);
export const ThemeContext = createContext(null);

function App() {
  const userName = "Bob";
  const [theme, setTheme] = useState("light");
  return (
    <div className="app-container">
      <UserContext.Provider value={userName}>
        <UserProfile />
      </UserContext.Provider>
      <ThemeContext value={theme}>
        <ThemeContextApp>
          <Header setTheme={setTheme} />
          <AppContent />
          <Footer />
        </ThemeContextApp>
      </ThemeContext>
    </div>
  );
}

export default App;
