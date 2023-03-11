import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"
import OurMissionJson from "../JSONS/OurMission.json"

function OurMissionPage() {
    
    return(
        <div id="mainMenu">
            <div id="paraAndImg">
                <HeaderParagraphImgCombo inputJson={OurMissionJson}></HeaderParagraphImgCombo>
            </div>
        </div>
        
    )
}
export default OurMissionPage