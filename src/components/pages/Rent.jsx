import { useParams } from "react-router-dom"
import logements  from '../../datas/logements.json'
import TagName from '../TagName'
import InfoBar from "../InfoBar"
import SlideShow from "../SlideShow"
import Rating from "../Rating"
import { Navigate } from 'react-router-dom'


function Rent() {
  const rentId = useParams()
  let currentRent = {}
  let idFound = false
  logements.forEach(logement => {
    if(logement.id === rentId.id){
      currentRent = logement
      idFound = true
    }
  })

  if(!idFound) {
    return <Navigate to='/error' />
  } else {
    document.title = `Kasa - ${currentRent.title} à ${currentRent.location}`

    return (
      <div className='rent'>
        <div className='slideShowContainer'> <SlideShow pictures={ currentRent.pictures }/> </div>
        <div className='titleAndHost'>
          <div className='titleLocationTags'>
            <h1>{currentRent.title}</h1>
            <p>{currentRent.location}</p>
            <div className='tagsContainer'>
              { currentRent.tags.map((tag, index) => ( <TagName key={`${tag}-${index}`} tag={tag}/>))}
            </div>
          </div>
          <div className='hostRate'>
            <div className='hostInfo'>
              <p>{currentRent.host.name}</p>
              <div className='profilePicture'><img src={currentRent.host.picture} alt={`Profil de ${currentRent.host.picture}`} /></div>
            </div>
            <Rating rating={currentRent.rating}/>
          </div>
        </div>
        <div className='informationBars'>
          <div className='singleInfo'>
            <InfoBar title='Description' content={currentRent.description} dimension='100' />
          </div>
          <div className='singleInfo'>
            <InfoBar title='Equipements' content={currentRent.equipments} dimension='100' />
          </div>
        </div>
      </div>
    )
  }
}

export default Rent
