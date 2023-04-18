import { useContext } from "react"
import { ThemeContext } from "./utils/context/ThemeProvider"

function NightModeButton() {
    const { toggleTheme, theme } = useContext(ThemeContext)

	return (
            <div className={theme === 'night' ? 'nightModeButtonOn' : 'nightModeButtonOff'}>
                <span>Night mode :</span> 
                <label className='switch'>
                    <input type='checkbox' onChange={toggleTheme} />
                    <span className='slider'></span>
                </label>
            </div>
    )
}

export default NightModeButton
