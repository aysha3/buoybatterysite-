import AboutUsJson from "../JSONS/AboutUs.json"
import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"
import "../Styles/AboutUs.css";

let counter = 0;

function AboutUsPage() {

    const sectionStyle= {
        width: "100%",
    };

    const profileStyle= {
        width: "45%"
    };

    return(
        <div id="imgSection" style={sectionStyle}>
            <div id="profileSection" style={profileStyle}>
                <HeaderParagraphImgCombo class="profile" inputJson={AboutUsJson}></HeaderParagraphImgCombo>
            </div>
        </div>
    )
}


export default AboutUsPage