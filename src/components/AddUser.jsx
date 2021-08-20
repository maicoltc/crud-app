import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addUser } from '../Service/api';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    username: '',
    name: '',
    lastname: '',
    email: '',
    phone: ''
}

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const { username, name, lastname, email, phone } = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} autoComplete="off" name='username' value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} autoComplete="off" name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} autoComplete="off" name='lastname' value={lastname} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} autoComplete="off" name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} autoComplete="off" name='phone' value={phone} />
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User</Button>
        </FormGroup>
    )
}

export default AddUser;