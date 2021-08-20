import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#4285F4'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20,
    }
})


const NavBar = () => {
    const clases = useStyle();
    return (
       <AppBar className={clases.header} position="static">
           <Toolbar>
                <NavLink className={clases.tabs} to="/" exact>HOME</NavLink>
                <NavLink className={clases.tabs} to="all" exact>ALL USERS</NavLink>
                <NavLink className={clases.tabs} to="add" exact>ADD USER</NavLink>
           </Toolbar>
       </AppBar>
    )
}

export default NavBar;