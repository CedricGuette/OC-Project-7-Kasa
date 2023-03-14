import RentCard from '../RentCard'
import PostHeader from '../PostHeader'
import logements  from '../../datas/logements.json'

function Home() {
  document.title = `Kasa - Accueil`
  return (
    <article>
      <PostHeader homePage={true}/>
      <div className='locationList'>
        {logements.map((logement) => (
          <RentCard key={`${ logement.id }-${ logement.title }`} id={ logement.id } title={ logement.title } cover={ logement.cover}/>
          )
        )}   
      </div>
    </article>
  )
}

export default Home
