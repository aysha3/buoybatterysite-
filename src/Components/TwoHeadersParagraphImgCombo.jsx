import testImg from "../Images/squareTest.png"


function HeaderParagraphImgCombo({inputJson}) {

    const mainStyle= {
        margin: "1em"
    };

    const sectionStyle= {
        margin: "5em 0em",
        display: "flex"
    };

    return(
        <div id="main" style={mainStyle}>
        {
            inputJson.map( info => {
                const textStyle = {
                    width: info.textWidth,
                    margin: '1em'
                };
                const imgStyle = {
                    width: info.imgSize,
                    height: info.imgSize,
                    margin: '1em'
                };
                if (info.istextLeft == true) {
                    return(
                        <div className="section" style={sectionStyle}>
                            <div id="text" align={info.alignText} style={textStyle} >
                                <h1>{info.header}</h1>
                                <h3>{info.subheader}</h3>
                                <p>{info.paragraph}</p>
                            </div>
                            <img src={require(`../Images/${info.imgSrc}`)} style={imgStyle}></img>
                        </div>
                    )
                } else {
                    return(
                        <div className="section" style={sectionStyle}>
                            <img src={require(`../Images/${info.imgSrc}`)} style={imgStyle}></img>
                            <div id="text" align={info.alignText} style={textStyle}>
                                <h1>{info.header}</h1>
                                <h3>{info.subheader}</h3>
                                <p>{info.paragraph}</p>
                            </div>
                        </div>
                    )
                }
                
            })
        }   
        </div>
        
    )
}
export default HeaderParagraphImgCombo