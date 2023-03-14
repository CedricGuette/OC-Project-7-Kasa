import { useState } from "react"

function SlideShow({ pictures }) {

    const [currentPicture, setPicture] = useState(0)
    const totalPictures = pictures.length
    const nextPicture = () => {
       setPicture( currentPicture === (totalPictures -1) ? (totalPictures -1) : currentPicture + 1)
    }
    const previousPicture = () => {
        setPicture( currentPicture === 0 ? 0 : currentPicture - 1)
     }

	return (
        <div className='slideShow'>
            {currentPicture === 0 ? null : (<div className='previousPicture' onClick={previousPicture}></div>)}
            {currentPicture === (totalPictures -1) ? null : (<div className='nextPicture' onClick={nextPicture}></div>)}
            {totalPictures <= 1 ? null : <div className='numberOfPicture'>{currentPicture + 1}/{totalPictures}</div>}
            {pictures.map((picture, index) => {
                return (
                    <div className='picture'  key={index}> 
                        {index === currentPicture && (<img src={picture} alt='oui' />)}
                    </div>
                )
            })}

        </div>
    )
}

export default SlideShow
