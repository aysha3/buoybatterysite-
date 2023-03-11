import testImg from "../Images/squareTest.png"

function HeaderParagraphImgCombo() {
    return(
        <div id="main">
            <div id="Text" align="left" width="60em">
                <h1>What is a Buoyancy Battery?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img className="friendsImg" src={testImg}></img>
        </div>
        
    )
}
export default HeaderParagraphImgCombo