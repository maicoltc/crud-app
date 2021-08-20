import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../Service/api';


const useStyle = makeStyles({
    table: {
        width:'90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 18
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.lastname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers;