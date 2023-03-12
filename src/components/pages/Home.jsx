import RentCard from '../RentCard'
import PostHeader from '../PostHeader'
import { logements } from '../../datas/logement'

function Home() {

  return (
    <div className='pageBody'>
      <PostHeader homePage={true}/>
      <div className='locationList'>
        {logements.map((logement) => (
          <RentCard key={`${ logement.id }-${ logement.title }`} id={ logement.id } title={ logement.title } cover={ logement.cover}/>
          )
        )}   
      </div>
    </div>
  )
}

export default Home
