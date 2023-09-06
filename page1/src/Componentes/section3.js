import '../css/section-3.css';
import ImageSection3 from '../assets/section-3/image--3.png'

function Section3() {
  return (
    <div class="section-3"> 
        <div class="secc-3">
        <img class="image-section--3" src={ImageSection3}/>
        <div class="content-section--3">
            <h1 class="title-section-3">Looking to Hire?</h1>
            <div class="sec-text-3">
              <p class="pp-section-3">Introducing the <span class="pp-blue-section-3">most affordable and comprehensive employers ATS</span> to date...</p>
            </div>
            <ul class="list-section--3">
                <li><p class="pp-section-3"><span class="pp-blue-section-3">Advanced candidate filtering</span> means you can filter and sort candidates like never before</p></li>
                <li><p class="pp-section-3"><span class="pp-blue-section-3">In-depth hiring data and analytics dashboard</span> to transform your hiring process</p></li>
                <li><p class="pp-section-3"><span class="pp-blue-section-3">Fully customizable hiring pipeline</span> so you can manage the entire applicant flow</p></li>
                <li><p class="pp-section-3"><span class="pp-blue-section-3">Note taking, task creation, and other collaboration capabilities</span> allow you to communicate and grow as a team</p></li>
                <li><p class="pp-section-3"><span class="pp-blue-section-3">Pricing starting at $29.99</span> that is designed to be affordable</p></li>
            </ul>
            <div class="buttons-sec-3">
              <div class="button-learn-more"><p>Learn More</p></div>
              <div class="button-sign-up"><p>Sign-Up</p></div>
            </div>
        </div>
        </div>
    </div>
  );  
}

export default Section3;
