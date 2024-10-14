import './Gallery.css'
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import white_arrow from '../../assets/white_arrow.png';

function Gallery() {
  return (
    <div>
      <div className='Gallery'>
      <img src={gallery1} alt="" />
      <img src={gallery2} alt="" />
      <img src={gallery3} alt="" />
      <img src={gallery4} alt="" />
      </div>
      <div className='gallery-btn'>
      <button className="button">Explore more <img src={white_arrow} alt="" /></button>
    </div>
  </div>
  )
}

export default Gallery
