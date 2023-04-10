/**
 * This one will return a list of what's in the array
 * @param {array} array
 * @returns a <li> list of the arraty
 */
function ArrayToList({ array }) {
	return (
        <ul>
            {array.map((arrayCell, index) => (<li key={`${index}-${arrayCell}`}>{arrayCell}</li>))}
        </ul>
    )
}

export default ArrayToList
