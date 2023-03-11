import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Menu } from "@mui/material"

function MainNavigationBar() {
    return(
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Home"></BottomNavigationAction>
            <BottomNavigationAction label="Bouyancy Battery"></BottomNavigationAction>
            <BottomNavigationAction label="Idea"></BottomNavigationAction>
            <BottomNavigationAction label="About Us"></BottomNavigationAction>
        </BottomNavigation>
    )
}
export default MainNavigationBar