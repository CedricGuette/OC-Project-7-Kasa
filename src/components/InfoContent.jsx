import ArrayToList from './ArrayToList'

function InfoBarContent({content}) {


	return (
        <div className='infoContent'>
        { Array.isArray(content) ? <ArrayToList array={ content }/>: <p>{ content }</p>}
        </div>
    )
}

export default InfoBarContent