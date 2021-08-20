/* eslint-disable jsx-a11y/alt-text */
import { Box, makeStyles } from '@material-ui/core';
import home from '../Assets/images/home.jpg';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: '50%'
    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <Box style={{display: 'flex'}}>
            <img className={classes.image} src={home} />
        </Box>
    )
}

export default Home;