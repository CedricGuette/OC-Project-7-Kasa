import { useState } from "react"

// const NONE = 0
// const PREVIOUS = 1
// const NEXT = 2

function SlideShow({ pictures }) {

    const [currentPicture, setPicture] = useState(0)
    // const [roll, setRoll] = useState(NONE)
    const totalPictures = pictures.length
    const nextPicture = () => {
       setPicture( currentPicture === (totalPictures -1) ? (totalPictures -1) : currentPicture + 1)
    //    setRoll(NEXT)
    }
    const previousPicture = () => {
        setPicture( currentPicture === 0 ? 0 : currentPicture - 1)
        // setRoll(PREVIOUS)
     }

	return (
        <div className='slideShow'>
            {currentPicture === 0 ? null : (<div className='previousPicture' onClick={previousPicture}></div>)}
            {currentPicture === (totalPictures -1) ? null : (<div className='nextPicture' onClick={nextPicture}></div>)}
            {totalPictures <= 1 ? null : <div className='numberOfPicture'>{currentPicture + 1}/{totalPictures}</div>}
            {pictures.map((picture, index) => {
                return (
                    <div className='picture'  key={index}> 
                        {/* {roll === PREVIOUS ? (index === currentPicture - 1 && (<img className='previous' src={picture} alt='Aperçu de la location' />)) : null} */}
                        {index === currentPicture && (<img className='current' src={picture} alt='Aperçu de la location' />)}
                        {/* {roll === NEXT ? (index === currentPicture + 1 && (<img className='next' src={picture} alt='Aperçu de la location' />)) : null} */}
                    </div>

                )
            })}

        </div>
    )
}

export default SlideShow
