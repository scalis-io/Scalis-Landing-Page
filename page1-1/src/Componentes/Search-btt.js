import '../css/Search-btt.css';
import SearchIcon from '../assets/section-1/search-icon.svg'
import locIcon from '../assets/section-1/location-icon.svg'
import JobIcon from '../assets/section-1/job-icon.svg'


function SearchBt() {
  return (
    <div class="Section-5">
        <div class="section--5">
            <div class="sec--divv--5">
            <p class="tittle--5">Find Your Future Job Today...</p>
            <div class="inputs--sec-5">
                <div class="button--5">
                    <img class="icon-bt" src={SearchIcon} />
                    <p class="txt-button">Job Title / Keyword Designer</p>
                </div>
                <div class="button--5">
                    <img class="icon-bt" src={locIcon} />
                    <p class="txt-button">Location</p>
                </div>
                <div class="button--5">
                    <img class="icon-bt" src={JobIcon} />
                    <p class="txt-button">Job Type Type</p>
                </div>
            </div>
            <div class="button-search--5">
                <p class="txt-button-search--5">Search</p>
            </div>
            </div>
        </div>
    </div> 
  ); 
}

export default SearchBt;