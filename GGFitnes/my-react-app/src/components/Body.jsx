import React from 'react';
import '../public/Body.css';

function Body() {
     return (<main>
        <div className='photoSlideButton'>
            <h1 className='photoSlideButton_text'>To be a <br></br>champion.</h1>
            <button className='photoSlideButton_button'>Start today.</button>
        </div>
         <div className='navBarUnderPhoto'>
         <ul className='main_ul'>
            <li className='main_li hover'>It's you now vs who you want to be</li>            
            <li className='main_li hover'>Personal Training in Kyiv</li>
            <li className='main_li hover'>Online training from anywhere</li>
         </ul>
         </div>
         <div className='disription'>
            <div className='discription_1'><p className='discription_1_logo'>G\G FITNESS</p><h2 className='discription_1_content'>To be a <br></br>champion.</h2></div>
            <div className='discription_2'>
            <p>It's easy to find fitness professionals today trying to reinvent the wheel <br></br> 
            when it comes to fitness. Amidst countless threads of techniques and tips <br></br> 
            and endless feeds of Instagram influencers and online trainers, it's hard to <br></br> 
            find clarity with so much noise. <br></br><br></br> 
            <em>Let me bring the focus back to you. Your body. Your goals. Your lifestyle.</em>
            <br></br>Take a tailored approach where 
            <strong>your own results are the only <br></br>benchmark</strong> 
            — the way it should always be. <br></br><br></br> 
            Let's go back to a results-based approach. Let's go back to basics.</p><br></br>
            <button className='discription_2_button'>Get started</button>
            </div>
         </div>
         <div className='photoSlideButton_2'>
            <p><span className='photoSlideButton_2_p1'>PERSONAL TRAINING</span><br></br><br></br>
            <span className='photoSlideButton_2_p2'>Where do you<br></br><span className='photoSlideButton_2_p2'>want to be?</span></span><br></br><br></br>
            <span className='photoSlideButton_2_p3'>1-1 Personal Training or<br></br><span className='photoSlideButton_2_p3'> Group Training in <strong>Kyiv</strong></span></span></p>
            <button className='photoSlideButton_2_button'>I'm ready</button>
        </div>
     </main>)
}

export default Body;            
