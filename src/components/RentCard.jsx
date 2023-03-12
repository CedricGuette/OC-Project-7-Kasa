import { Link } from "react-router-dom"

function RentCard({id, title, cover}) {

	return (
        <Link to= {`/rent/${id}`}>
            <div className='rentCard'>
                <img src={ cover } alt={ title }/>
                <h2>
                    <span>{ title }</span>
                </h2>
            </div>
        </Link>
    )
}

export default RentCard
