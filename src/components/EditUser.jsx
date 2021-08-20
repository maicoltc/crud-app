
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { editUser, getUsers } from '../Service/api';
import { useHistory, useParams } from 'react-router-dom';

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

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { username, name, lastname, email, phone } = user;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
        loadUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
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
            <Button variant="contained" onClick={() => editUserDetails()} color="primary">Edit User</Button>
        </FormGroup>
    )
}

export default EditUser;