import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MainNavigationBar() {
    const [value, setValue] = useState(0);
    const navigate=useNavigate();

    return(
        <BottomNavigation showLabels value={value}
        onChange={(event, newValue) => {
         setValue(newValue);
        }}>
            <BottomNavigationAction label="Home" onClick={()=>navigate("/buoyInfo")}></BottomNavigationAction>
            <BottomNavigationAction label="Bouyancy Battery" onClick={()=>navigate("/buoyInfo")}></BottomNavigationAction>
            <BottomNavigationAction label="Idea"></BottomNavigationAction>
            <BottomNavigationAction label="About Us" onClick={()=>navigate("/")}></BottomNavigationAction>
        </BottomNavigation>
    )
}
export default MainNavigationBar