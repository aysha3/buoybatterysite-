import AboutUsJson from "../JSONS/AboutUs.json"
import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"
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
                <HeaderParagraphImgCombo class="profile" inputJson={AboutUsJson}></HeaderParagraphImgCombo>
            </div>
        </div>
    )
}


export default AboutUsPage