import { useEffect, useState } from "react"


// Using constant to make easier the mecanics of the animation
const VISIBLE = 1
const HIDDEN = 2
const ENTERING = 3
const LEAVING = 4

/**
 * This one is used to generate the info bar when it's opened and to make css animation
 */
function InfoBarFade({visible, children}) {

    const [state, setState] = useState(visible ? VISIBLE : HIDDEN)
    const className = state === VISIBLE ? 'fade' : 'fade out'

    useEffect(() => {
        if(!visible) {
            setState(LEAVING)
        } else {
            setState((s) => s === HIDDEN ? ENTERING : VISIBLE)
        }
    }, [visible])

    useEffect(() => {
        if(state === LEAVING) {
            const timer = setTimeout(() => {
                setState(HIDDEN)
            }, 400)
            return () => {
                clearTimeout(timer)
            }
        } else if(state === ENTERING) {
            let forceRender = document.body.offsetHeight
            let avoidError = forceRender
            forceRender = avoidError

            setState(VISIBLE)
        }
    }, [state])

    if(state === HIDDEN) {
        return null
    }

	return (
            <div className={className}>{ children }</div>
    )
}

export default InfoBarFade
