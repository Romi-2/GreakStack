import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import playicon from '../../assets/playicon.png'
function About() {
  return (
    <>
    <div className='about container'>
      <div className="about-leftside">
        <img src={about} alt="" className="about-img"/>
        <img src={playicon} alt="" className="play-icon-img"/>
        </div>
        <div className='about-rightside'>
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today
          </h2>
          <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.

          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.

          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
    </>
  )
}

export default About
