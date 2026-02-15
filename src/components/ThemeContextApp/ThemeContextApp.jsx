import { useContext } from 'react'
import './ThemeContextApp.css'
import { ThemeContext } from '../../App'

function ThemeContextApp({children}) {
    const theme = useContext(ThemeContext)
  return (
    <div className={`${theme}-mood always`}>
        {children}
    </div>
  )
}

export default ThemeContextApp