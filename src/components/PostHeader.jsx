function PostHeader({homePage}) {
	return (
            <div className={'postHeader' + (homePage ? ' home' : ' aboutUs')}>
                {homePage ? (<h1>Chez vous, partout et ailleurs</h1>) : null}
            </div>
    )
}

export default PostHeader