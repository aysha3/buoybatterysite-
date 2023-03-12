import AboutUsJson from "../JSONS/AboutUs.json"
import TwoHeadersParagraphImgCombo from "../Components/TwoHeadersParagraphImgCombo"
import "../Styles/AboutUs.css";

let counter = 0;

function AboutUsPage() {

    const sectionStyle= {
        width: "100%",
    };

    const profileStyle= {
    };

    return(
        <div class="imgSection" style={sectionStyle}>
            <div id="profileSection" style={profileStyle}>
                <TwoHeadersParagraphImgCombo class="profile" inputJson={AboutUsJson}></TwoHeadersParagraphImgCombo>
            </div>
        </div>
    )
}


export default AboutUsPage