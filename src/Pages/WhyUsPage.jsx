import HeaderParagraphImgCombo from "../Components/HeaderParagraphImgCombo"
import WhyUsJson from "../JSONS/WhyUs.json"
import WhyUsMoreJson from "../JSONS/WhyUsMoreDetail.json"

function WhyUsPage() {
    
    return(
        <div id="mainMenu">
            <div id="paraAndImg">
                <HeaderParagraphImgCombo inputJson={WhyUsJson}></HeaderParagraphImgCombo>
            </div>
            {
                WhyUsMoreJson.map( info => {
                    return(
                        <div id="para">
                            <p>{info.paragraph}</p>
                        </div>
                    )
                })
            }
        </div>
        
    )
}
export default WhyUsPage