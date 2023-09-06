import '../css/section-1.css';
import ImageSec1 from '../assets/section-1/image--sec1.svg'

function Section1() {
  return (
    <div class="Section1">
        <div class="sec---1">
            <div class="text-info-sec-1">
                <p class="descri---sec1">The hiring market is broken but...</p>
                <h1 class="tittle---sec1">Hiring shouldn’t suck.</h1>
                <p class="intro---sec1"> SCALIS matches qualified candidates to 
                    relevant companies with the <span class="intro---sec1--">
                    first ever fully-integrated ATS & job board leveraging AI.
                    </span>
                </p>
                <div class="input---sec-1">
                    <div class="input-list">
                        <input class="input--sec-1" type='text'></input>
                    </div>
                    <div class="button-confirm--sec-1">
                    <p class="txt-button-confirm">Join Our Waitlist</p>
                    </div>
                </div>
            </div>
            <img class="image--sec-1" src={ImageSec1} />
        </div>
    </div>
  ); 
}

export default Section1;
