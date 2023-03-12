function ArrayToList({ array }) {
	return (
        <ul>
            {array.map((arrayCell, index) => (<li key={`${index}-${arrayCell}`}>{arrayCell}</li>))}
        </ul>
    )
}

export default ArrayToList