import logo from '../assets/logo.svg'
import NightModeButton from './NightModeButton'

function Footer() {
	return (
        <footer>
            <div className='kasaLogo'>
                <img src={logo} alt='Logo de Kasa' />
            </div>
            <span className='copyright'>© 2020 Kasa. All rights reserved</span>
            <NightModeButton/>
        </footer>
    )
}

export default Footer
