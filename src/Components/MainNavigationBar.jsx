import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MainNavigationBar() {
    const [value, setValue] = useState(0);
    const navigate=useNavigate();
    const navStyle = {
        backgroundColor: "#D9EFFF",
        justifyContent: "right"
    };

    return(
        <BottomNavigation showLabels value={value}
        onChange={(event, newValue) => {
         setValue(newValue);
        }}>
            <BottomNavigationAction style={{color: "#14496F"}} icon={<img height="200px" width="200px"src="Images/logo.png"/>}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Home" onClick={()=>navigate("/")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Bouyancy Battery" onClick={()=>navigate("/buoyInfo")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Idea" onClick={()=>navigate("/idea")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="About Us" onClick={()=>navigate("/aboutus")}></BottomNavigationAction>
        </BottomNavigation>
    )
}
export default MainNavigationBar
