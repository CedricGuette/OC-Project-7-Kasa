import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
	return (
        <header>
            <div className='kasaLogo'>
                <Link to='/'>
                    <img src={logo} alt='Logo de Kasa' />
                </Link>
            </div>
            <nav>
                <ul className='desktop'>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/a-propos'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
