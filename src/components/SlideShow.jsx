import { useState } from 'react'
import useKey from './utils/useKey'

// Different steps of the animation of the slideshow
const VISIBLE = 1
const HIDDEN = 2
const ENTERING = 3
let slidePossible = true // This one is used to block switc buttons until the animation is over

function SlideShow({pictures}) {

    const [stateOne, setStateOne] = useState(HIDDEN)
    const [stateTwo, setStateTwo] = useState(HIDDEN)
    const [currentPicture, setPicture] = useState(0)
    const className = stateOne === ENTERING ? 'previous' : 'current'
    const totalPictures = pictures.length

    const nextPicture = () => {
        // Blocking function if it's the last picture
        if(currentPicture !== totalPictures - 1) {
            // Blocking function if animation is not ended
            if(slidePossible === true) {
                setPicture( currentPicture === (totalPictures -1) ? (totalPictures -1) : currentPicture + 1)
                setStateTwo(VISIBLE)
                slidePossible = false
                const timer = setTimeout(() => {
                    setStateTwo(HIDDEN)
                    slidePossible = true 
                }, 500)
                return () => {
                    clearTimeout(timer)
                }
            }
        }
    }
    const previousPicture = () => {
        // Blocking function if it's the first picture
        if(currentPicture > 0){
            // Blocking function if animation is not ended
            if(slidePossible === true) {
                
                setPicture( currentPicture === 0 ? 0 : currentPicture - 1)
                setStateOne(ENTERING)
                slidePossible = false
                const timer = setTimeout(() => {
                    setStateOne(HIDDEN)
                    slidePossible = true 
                }, 500)
                return () => {
                    clearTimeout(timer)
                }
            }
        }
     }

     useKey('ArrowLeft', previousPicture)
     useKey('ArrowRight', nextPicture)

	return (
        <div className='slideShow'>


            {currentPicture === 0 ? null : (<div className='previousPicture' onClick={previousPicture}></div>)}
            {currentPicture === (totalPictures -1) ? null : (<div className='nextPicture' onClick={nextPicture}></div>)}
            {totalPictures <= 1 ? null : <div className='numberOfPicture'>{currentPicture + 1}/{totalPictures}</div>}

            {stateOne === HIDDEN ? null : (<img className="current" src={pictures[currentPicture + 1]} alt='Aperçu de la location' />)}
            {<img className={className} src={pictures[currentPicture]} alt='Aperçu de la location' />}
            {stateTwo === HIDDEN ? null : (<img className="next" src={pictures[currentPicture - 1]} alt='Aperçu de la location' />)}
        </div>
    )
}

export default SlideShow
