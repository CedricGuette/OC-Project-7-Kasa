import ArrayToList from './ArrayToList'

/**
 * 
 * @param {string} content to be added in info bar 
 * @returns 
 */
function InfoBarContent({content}) {


	return (
        <div className='infoContent'>
        { Array.isArray(content) ? <ArrayToList array={ content }/>: <p>{ content }</p>}
        </div>
    )
}

export default InfoBarContent
