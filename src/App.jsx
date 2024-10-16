import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Title from './Component/Title/Title'
import Program from './Component/program/Program'
import About from './Component/About/About'
import Gallery from './Component/Gallery/Gallery'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div >
      <Hero/>
      <Navbar/>
      <div className='container'>
      <Title subtitle="our Program" title="What We Offer"/>
      <Program/>
      <About/>
      <Title subtitle="Gallery" title="Campus Photo"/>
      <Gallery/>
      
      <Title subtitle="TESTIMONIALS" title="What Student Says"/>
      <Testimonials></Testimonials>
      <Title subtitle="Contact Us" title="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
export default App
