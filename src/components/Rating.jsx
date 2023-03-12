import Star from "./Star"

function Rating({ rating }) {
    const range =[1, 2, 3, 4, 5]

	return (
        <div className='rating'>
            {range.map((rate, index) => (rate <= rating ? <Star key={`${index}-ratingstar`} color='#FF6060'/> : <Star key={`${index}-ratingstar`} color='#E3E3E3'/>)) }
        </div>
    )
}

export default Rating