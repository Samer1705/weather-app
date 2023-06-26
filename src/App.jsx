import './App.css'
import Home from './pages/Home/Home'
import { createContext, useState } from 'react'
export const ThemeContext = createContext(null)
const App = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () =>{
        setTheme((curr) => (curr == 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            <div id={theme}>
                <Home />
            </div>
        </ThemeContext.Provider>
    )
}
export default App
