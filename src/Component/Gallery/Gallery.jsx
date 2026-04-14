import './Gallery.css'
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import { Link } from 'react-scroll';

function Gallery() {
  // Button click handler function
  const handleExploreMore = () => {
    console.log("Explore More Gallery button clicked");
    // Add any additional functionality here
    // For example: track analytics, load more images, etc.
  }

  return (
    <div>
      <div className='Gallery'>
        <img src={gallery1} alt="Gallery image 1" />
        <img src={gallery2} alt="Gallery image 2" />
        <img src={gallery3} alt="Gallery image 3" />
        <img src={gallery4} alt="Gallery image 4" />
      </div>
      <div className='gallery-btn'>
        <Link 
          to="about"  
          spy={true} 
          smooth={true} 
          offset={-170} 
          duration={500}
          className="button"
          onClick={handleExploreMore}
        >
          Explore more
        </Link>
      </div>
    </div>
  )
}

export default Gallery