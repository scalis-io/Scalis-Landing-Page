import '../css/section-3.css';
import ImageSection5 from '../assets/section-5/image--5.png'

function Section3() {
  return (
    <div class="section-3"> 
        <div class="secc-3">
        <div class="content-section--3">
            <h1 class="title-section-3">Looking for a Job?</h1>
            <div class="sec-text-3">
              <p class="pp-section-3">An innovative and new way to engage and interact with employers...</p>
            </div>
            <ul class="list-section--3">
                <li><p class="pp-section-3">Job seekers create<span class="pp-blue-section-3"> one profile to apply over and over again with just one click</span></p></li>
                <li><p class="pp-section-3"><span class="pp-blue-section-3">Full transparency into the hiring pipeline </span> - see how many rounds are left and what tasks remain</p></li>
                <li><p class="pp-section-3"><span class="pp-blue-section-3">Take notes on job opportunities</span> and schedule interviews seamlessly with employers</p></li>
                <li><p class="pp-section-3">Manage your entire recruiting process in one place with all the tools you need</p></li>
                <li><p class="pp-section-3">Receive<span class="pp-blue-section-3"> job opportunity recommendations</span> from our system to expedite your search process</p></li>
            </ul>
            <div class="buttons-sec-3">
              <div class="button-learn-more"><p>Learn More</p></div>
              <div class="button-sign-up"><p>Sign-Up</p></div>
            </div>
        </div>
        <img class="image-section--3" src={ImageSection5}/>
        </div>
    </div>
  );  
}

export default Section3;
