import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../App'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Toolbar = () => {
  let { theme, toggleTheme } = useContext(ThemeContext)
  const [themeIcon, setThemeIcon] = useState('fa-moon')
  const themeChanger = () =>{
    setThemeIcon((curr) => (theme == 'light'? 'fa-moon' : 'fa-sun'))
  }
  return (
    <nav className='d-flex justify-content-between container-fluid p-3'>
      <div>
        <h1 className='lead fs-2'><i className="fa-solid fa-bolt-lightning text-warning mx-2"></i>SkyWise</h1>
      </div>
      <div className='p-3'>
        {/* <button type="button" className={`btn ${theme == 'dark' ? 'btn-outline-dark': 'btn-outline-light'} m-2`} onClick={toggleTheme}><i className={`fa-solid ${themeIcon}`}></i></button> */}
        <ThemeToggle toggleTheme={toggleTheme}/>
      </div>
    </nav>
  )
}

export default Toolbar