import '../css/footer.css';
import IconTT from '../assets/footer/icon-tt.svg'
import IconIn from '../assets/footer/icon-in.svg'
import Logo from '../assets/footer/logo.svg'
import Line from '../assets/footer/line.svg'

function Footer() {
  return (
    <div class="footer">
        <div class="seson-1-footer">
            <div class="seson-left">
              <h1 class="txt-footer-left">Hiring shouldn’t suck.</h1>
              <img src={Logo} />
            </div>
            <div class="seson-right">
              <div class="sections-link">
                  <p class="tittle-link">For Companies</p>
                  <p class="txt-link">Learn more</p>
                  <p class="txt-link">Sign up</p>
                  <p class="txt-link">Book a demo</p>
              </div>
              <div class="sections-link">
                  <p class="tittle-link">For Job Seekers</p>
                  <p class="txt-link">Learn more</p>
                  <p class="txt-link">Sign up</p>
                  <p class="txt-link">Job listings</p>
              </div>
              <div class="sections-link">
                  <p class="tittle-link">Resources</p>
                  <p class="txt-link">About us</p>
                  <p class="txt-link">Contact us</p>
                  <p class="txt-link">Support</p>
              </div>
            </div>
        </div>
        <img src={Line} />
        <div class="bootom-sec-footer">
          <p class="txt-link">Copyright © SCALIS. All rights reserved.</p>
          <div class="judi-link">
            <p class="txt-link">privacy</p>
            <p class="txt-link">terms & conditions</p>
            <img src={IconTT} />
            <img src={IconIn} />
          </div>
        </div>
    </div> 
  ); 
}

export default Footer;
