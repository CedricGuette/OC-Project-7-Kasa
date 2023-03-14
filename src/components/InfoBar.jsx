import { useState } from 'react'
// import ArrayToList from './ArrayToList'
import InfoBarContent from './InfoContent'
import InfoBarFade from './InfoBarFade'

/**
 * Will render an info bar that can be opened or closed
 * @param {string, string, string} parameters : title of infobar content of infobar and flex-basis of infobar
 * @returns 
 */
function InfoBar({title, content, dimension}) {

    const [isOpen, setIsOpen] = useState(false)

	return (
            <div className='infoWrapper' style={{ flexBasis: `${dimension}%`}}>
                <div className='infoBar'>
                    <span>{ title }</span>
                    <div className= {'openButton' + (isOpen ? ' open' : ' close')} onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}></div>
                </div>
                <InfoBarFade visible={isOpen}>
                    <InfoBarContent content={content} />
                </InfoBarFade>
                {/* { isOpen ? (
                    <div className='infoContent'>
                    { Array.isArray(content) ? <ArrayToList array={ content }/>: <p>{ content }</p>}
                    </div>
                ) : null } */}

            </div>
    )
}

export default InfoBar
