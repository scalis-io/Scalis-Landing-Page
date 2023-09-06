import '../css/section-6.css';
import LogoUser from '../assets/section-6/avatar-bussines.png'
import Logo1 from '../assets/section-6/logo-bussines--1.png'
import Logo2 from '../assets/section-6/logo-bussines--2.png'
import Logo3 from '../assets/section-6/logo-bussines--3.png'
import Logo4 from '../assets/section-6/logo-bussines--4.png'
import SlideScrooll from '../assets/section-6/slide-scroll.svg'
import LineSlide from '../assets/section-6/line-slide.svg'
import Line from '../assets/section-6/line.svg'

function Section6() {
  return (
    <div class="section-6"> 
      <img src={Line} />
      <div class="sec---6">
        <div class="slide-bar-bussines">
          <div class="icons-bussines">
            <img src={Logo1} />
            <img src={Logo2} />
            <img src={Logo3} />
            <img src={Logo4} />
          </div>
          <div>
            <img class="slide-scroll" src={SlideScrooll} />
            <img src={LineSlide} />
          </div>
        </div>
        <div class="comments-bussines">
          <p class="txt-comment">SCALIS unlocks a new power for the entire hiring ecosystem.</p>
          <div class="box-comment-bussines">
            <p class="txt-box">“SCALIS unlocked a whole new hiring frontier for us. Gone are the days of manually 
              scanning through each and every resume. Instead, we can sort through hundreds of resumes 
              in just minutes to get to the candidates we need.”
            </p>
            <p class="txt-decri-box">- Blake Imperl, Strategic Head of Marketing</p>
            <img src={LogoUser} />
          </div>
          <div class="buttons-sec-3">
              <div class="button-learn-more"><p>Learn More</p></div>
              <div class="button-sign-up"><p>Sign-Up</p></div>
            </div>
        </div>
      </div>
      <img src={Line} />
    </div>
  );  
}

export default Section6;
