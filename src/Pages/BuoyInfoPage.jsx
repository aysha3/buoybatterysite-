import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"
import BuoyBattParaImg1Info from "../JSONS/BuoyBattParaImg1.json"
import BuoyBattParaImg2Info from "../JSONS/BuoyBattParaImg2.json"

function BuoyInfoPage() {
    return(
        <div id="mainMenu">
            <div id="WhatIs">
                <HeaderParagraphImgCombo inputJson={BuoyBattParaImg1Info}></HeaderParagraphImgCombo>
            </div>
           {/* <div id="implementation">
                <HeaderParagraphImgCombo inputJson={BuoyBattParaImg2Info}></HeaderParagraphImgCombo>
            </div> */}
        </div>
        
    )
}
export default BuoyInfoPage
