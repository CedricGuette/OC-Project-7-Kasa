import { Link } from "react-router-dom"

function Error() {
  document.title = `Kasa - Oups! La page que vous demandez n'existe pas.`
  return (
    <article>
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    </article>
  )
}

export default Error
