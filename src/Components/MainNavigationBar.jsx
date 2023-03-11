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
            <BottomNavigationAction style={{color: "#14496F"}} icon={<img height="200px" width="200px"src="../Images/logo.png"/>}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Buoyancy Battery" onClick={()=>navigate("/")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Why Choose Us" onClick={()=>navigate("/whyus")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Timeline" onClick={()=>navigate("/timeline")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="Our Mission" onClick={()=>navigate("/mission")}></BottomNavigationAction>
            <BottomNavigationAction style={{color: "#14496F"}} label="About Us" onClick={()=>navigate("/aboutus")}></BottomNavigationAction>
        </BottomNavigation>
    )
}
export default MainNavigationBar
