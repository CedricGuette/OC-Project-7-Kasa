import InfoBar from '../InfoBar'
import PostHeader from '../PostHeader'

import { aboutList } from '../../datas/aboutUs'

function AboutUs() {
  document.title = `Kasa - A propos`
  return (
    <article>
      <PostHeader homePage={false}/>
      <div className='aboutUsContainer'>
        {aboutList.map((about, index) => (
          <InfoBar key={ index } title={ about.title } content={ about.content } dimension='90' />
        ))}
      </div>
    </article>
  );
}

export default AboutUs
