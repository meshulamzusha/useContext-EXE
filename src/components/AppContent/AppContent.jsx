import { useContext } from 'react';
import './AppContent.css'
import { ThemeContext } from '../../App';

function AppContent() {
  const theme = useContext(ThemeContext)
  const className = `greet-card-${theme}`
  return (
    <div>
      <div className={`${className} card`}>It’s good to see you</div>
      <div className={`${className} card`}>What’s happening?</div>
      <div className={`${className} card`}>What’s up?</div>
    </div>
  );
}

export default AppContent;
