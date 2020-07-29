import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'

function Menu () {
    return (
        <nav className="Menu">
            <Link href="/">
                <img className="Logo" src={Logo} alt="LuizFlilho" />
            </Link>
            <Button as={Link} to="/cadastro/videos">Novo Vídeo</Button>
        </nav>
    )
}

export default Menu