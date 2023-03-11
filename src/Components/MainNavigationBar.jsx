import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MainNavigationBar() {
    const [value, setValue] = useState(0);

    return(
        <BottomNavigation showLabels value={value}
        onChange={(event, newValue) => {
         setValue(newValue);
        }}>
            <BottomNavigationAction  label="Home"></BottomNavigationAction>
            <BottomNavigationAction  label="Bouyancy Battery"></BottomNavigationAction>
            <BottomNavigationAction   label="Idea"></BottomNavigationAction>
            <BottomNavigationAction  label="About Us"></BottomNavigationAction>
        </BottomNavigation>
    )
}
export default MainNavigationBar