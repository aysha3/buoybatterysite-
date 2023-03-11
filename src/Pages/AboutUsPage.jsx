import testImg from "../Images/squareTest.png"
import AboutUsJson from "../JSONS/AboutUs.json"
import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"

let counter = 0;

function AboutUsPage() {

    const sectionStyle= {
        width: "100%",
        display: "flex"
    };

    const profileStyle= {
        width: "45%"
    };

    return(
        <div id="imgSection" style={sectionStyle}>
            <div id="profile" style={profileStyle}>
                <HeaderParagraphImgCombo inputJson={AboutUsJson}></HeaderParagraphImgCombo>
            </div>
        </div>
    )
}


export default AboutUsPage