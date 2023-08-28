import '../css/section-7.css';
import Line from '../assets/section-6/line.svg'

function Section7() {
  return (
    <div class="section-7">
        <div class="txt-sec--7">
            <p class="txt-sub-sec-7">Why SCALIS?</p>
            <p class="txt-tittle-sec-7">How SCALIS redefines the hiring process</p>
            <p class="txt-descri-sec-7">
                SCALIS flips the entire hiring process on its head, focusing 
                on QUALITY over QUANTITY. With never before seen ATS tools combined with a 
                industry-defining matching algorithm, employers have never had so much power 
                in their hands.
            </p>
            <div class="boxes-opp-sec-7">
                <div class="boxing-opp">
                    <p class="tittle-box">Other ATS and Job Board Platforms:</p>
                    <p class="txt-boxes">
                        Candidates fill out the same information over and over  
                    </p>
                    <p class="txt-boxes">
                        Candidates apply with limited info pdf resumes 
                    </p>
                    <p class="txt-boxes">
                        Limited candidate filtering and sorting tools 
                    </p>
                    <p class="txt-boxes">
                        No cross-referencing of candidates across jobs  
                    </p>
                    <p class="txt-boxes">
                        Static resumes that become outdated  
                    </p>
                    <p class="txt-boxes">
                        Ineffective and inefficient parsing algorithms  
                    </p>
                    <p class="txt-boxes">
                        High base prices with countless add-ons
                    </p>
                </div>
                <div class="boxing-opp-">
                    <p class="tittle-box">SCALIS Integrated AI Hiring Platform:</p>
                    <p class="txt-boxes-">
                        Candidates create one profile to be used repeatedly  
                    </p>
                    <p class="txt-boxes-">
                        Candidates apply with detailed profiles 
                    </p>
                    <p class="txt-boxes-">
                        Dozens of filtering and sorting tools
                    </p>
                    <p class="txt-boxes-">
                        Track candidates’ entire history with your company 
                    </p>
                    <p class="txt-boxes-">
                        Candidate resumes update every time they use SCALIS 
                    </p>
                    <p class="txt-boxes-">
                        Advanced AI-based algorithm that ranks and sorts candidates 
                    </p>
                    <p class="txt-boxes-">
                        All-inclusive, transparent, subscription pricing
                    </p>
                </div>
            </div>
        </div> 
      <div class="line--sec-7">
        <div class="button-read">
            <p class="txt-button-read">Read our story</p>
        </div>
        <img src={Line} />
      </div>
    </div>
  );  
}

export default Section7;
