import { useState } from 'react'
import './Testimonials.css'
import back_icon from '../../assets/back_icon.png'
import forward_icon from '../../assets/forward_icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials=()=> {
    const[tx, setTx]= useState(0);
    const sliderRef=useState(null);

    const handleNext=()=>{
        if(tx > -50){//move the slider to a maximun of -50%
            setTx(tx-50);//move by 50%
            }
    };

    const handleBack=()=>{
        if(tx< 0){//return to the initial position or move back
            setTx(tx+50);//move back by 50%
            }
    };

    const sliderTranslate= `${tx}%`;

  return (
      <div className='testimonials'>
        <img src={ forward_icon} alt="Next" className='next-btn' onClick={handleNext} />
        <img src={back_icon} alt="Back" className='back-btn' onClick={handleBack} />
        <div className='slider'>
            <ul className='slider-content' style={{transform: `translateX(${sliderTranslate})`}} ref={sliderRef}>
                <li>
                  <div className='slide'>
                    <div className='user-info'>
                      <img src={user_1} alt="" />
                       <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity, USA</span>
                      </div>
                    </div>
                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                   </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                      <img src={user_2} alt="" />
                       <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity, USA</span>
                      </div>
                    </div>
                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                   </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                      <img src={user_3} alt="" />
                       <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity, USA</span>
                      </div>
                    </div>
                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                   </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                      <img src={user_4} alt="" />
                       <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity, USA</span>
                      </div>
                    </div>
                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                   </div>
                </li>
            </ul>
        </div>
      </div>
  )
}

export default Testimonials
