import '../Css-For-Rmployers-1/sec-1.css';
import ImageSec1 from '../Assets/Sec1/image-sec-1.png'

function Sec1() {
  return (
    <div class="Sec-1">
        <div class="sec-left">
            <div>
                <p class="txt-left">For Employers</p>
                <h1 class="title-left">Hire your gold medal candidate<br></br>
                    <span class="italic-left"> faster</span>
                </h1>
                <p class="txt-left">
                    From candidate sourcing to management, free your team up to 
                    spend time with the candidates that matter.
                </p>
            </div>
            <div class="buttons--sec-1">
                <div class="button-book">
                    <p class="txt-book">Book a Demo</p>
                </div>
                <div class="button-Sign-Now">
                    <p class="txt-Sign-Now">Sign Up Now</p>
                </div>
            </div>
        </div>
        <img src={ImageSec1} />
    </div>
  ); 
}

export default Sec1;
