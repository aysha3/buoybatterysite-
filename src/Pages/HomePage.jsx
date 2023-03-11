import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"
import HomePageJson from "../JSONS/HomePage.json"

function HomePage() {
    return(
        <div id="mainMenu">
            <div id="Home">
                <HeaderParagraphImgCombo inputJson={HomePageJson}></HeaderParagraphImgCombo>
            </div>
        </div>
        
    )
}
export default HomePage