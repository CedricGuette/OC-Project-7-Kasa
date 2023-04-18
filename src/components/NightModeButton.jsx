import { useContext } from "react"
import { ThemeContext } from "./utils/context/ThemeProvider"

function NightModeButton() {
    const { toggleTheme , theme} = useContext(ThemeContext)

	return (
            <div className='nightModeButton'>
                <span>Night mode :</span> 
                <label className='switch'>
                    {theme === 'light' ? (<input type='checkbox' onChange={toggleTheme} />) : (<input type='checkbox' onChange={toggleTheme} checked/>)}
                    <span className='slider'></span>
                </label>
            </div>
    )
}

export default NightModeButton
