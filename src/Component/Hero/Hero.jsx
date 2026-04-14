import './Hero.css'
import { Link } from 'react-scroll'

function Hero() {
  // Button click handler function (optional)
  const handleExploreMore = () => {
    console.log("Navigating to About section");
    // You can add any additional logic here
  }

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-170} 
          duration={500}
          className="btn"
          onClick={handleExploreMore}
        >
          Explore more
        </Link>
      </div>
    </div>
  )
}

export default Hero