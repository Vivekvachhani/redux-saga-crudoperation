import React, { useCallback, useEffect, useState } from 'react'
import {Registration} from './action/index'
import { useDispatch,useSelector } from "react-redux";
import {DELETE_USER,SEARCH_USER,Add_USER,Edit_USER} from './Type/types'
import { makeStyles ,alpha} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Editeuser from'./Edituser'
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 650,
  },
  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const App = () => {
  const classes = useStyles();

  const user = useSelector(state => state.app.userData)
  console.log('user', user)
  const [userListState, setUserListState] = useState(user)
  console.log('userListState', userListState)
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  let dispatch = useDispatch();

const [User, setUser] = useState({
  username: '',
  Companyname:'',
  email:'',
  phone:''
})
const [Editser, setEdituser] = useState({
  username: '',
  Companyname:'',
  email:'',
  phone:''
})
const [open, setOpen] = React.useState(false);
const [id, setid] = React.useState(false);

const handleClickOpen = (id) => {
  debugger
  setOpen(true);
  setid(id)
};

const handleClose = () => {
  setOpen(false);
};
const Submite=()=>{
   
  const data={
      id:id,
      username:Editser.username,
      email:Editser.email,
      phone:Editser.phone,
      company: Editser.Companyname,
  }
    dispatch({ type: Edit_USER, data:data })
    handleClose()
}
const submite=()=>{
 debugger
  dispatch({ type: Add_USER, data:User })
}
  useEffect(() => {
    dispatch(Registration())
  }, [])
  console.log('user', user)
  useEffect(() => {
    if (user) {
      setUserListState(user)
      forceUpdate()
    }
  },[])
  const changedelete=(id)=>{
    debugger
 dispatch({ type: DELETE_USER, id: id })
  }

const handlechange=(e)=>{
  debugger
  const {name ,value}= e.target;
  console.log('value', value)

  dispatch({ type: SEARCH_USER, data:value })
}
const Addchange=(e)=>{
      debugger
      const {name ,value}= e.target;
    
      setEdituser({
        ...Editser,
        [name]: value
    })
  }
const addchange=(e)=>{
  debugger
  const {name ,value}= e.target;

  setUser({
    ...User,
    [name]: value
})
 
}

  return (
    <>
  {/* <div>
  <input type="text" name="Fname"  value={registrationState.Fname}     onChange={handleLoginInputChange}></input>
  </div> */}
   <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Redux-saga
          </Typography>
          username: <InputBase
              placeholder="Username....."
              name="username"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={addchange}
              inputProps={{ 'aria-label': 'search' }}
            />
              Compny name: <InputBase
              placeholder="Companyname....."
              name="Companyname"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={addchange}
              inputProps={{ 'aria-label': 'search' }}
            />
              email: <InputBase
              placeholder="email....."
              name="email"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={addchange}
              inputProps={{ 'aria-label': 'search' }}
            />
              phone: <InputBase
              placeholder="phone....."
              name="phone"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={addchange}
              inputProps={{ 'aria-label': 'search' }}
            />
              <Button variant="contained" onClick={submite}>
                         AddUser
                  </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handlechange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  
       <Editeuser open={open} handleClose={handleClose} addchange={Addchange} Submite={Submite} Editser={Editser} id={id}/>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="right">index</TableCell>
                {/* <TableCell align="right">city</TableCell>
                <TableCell align="right">street</TableCell>
                <TableCell align="right">zipcode&nbsp;(g)</TableCell> */}
                <TableCell align="right">company&nbsp;(g)</TableCell>
                <TableCell align="right">email&nbsp;(g)</TableCell>
                <TableCell align="right">phone&nbsp;(g)</TableCell>
                <TableCell align="right">Name&nbsp;(g)</TableCell>
                {/* <TableCell align="right">website&nbsp;(g)</TableCell> */}
                <TableCell align="right">Delete&nbsp;(g)</TableCell>
                <TableCell align="right" >Edit&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userListState.map((_, index) => (
                <TableRow key={index}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                    
                  </TableCell> */}
                  <TableCell align="right">{index}</TableCell>
                  {/* <TableCell align="right">{_.address.city}</TableCell>
                  <TableCell align="right">{_.address.street}</TableCell>
                  <TableCell align="right">{_.address.zipcode}</TableCell> */}
                  <TableCell align="right">{_.company?.name}</TableCell>
                  <TableCell align="right">{_.email}</TableCell>
                  <TableCell align="right">{_.phone}</TableCell>
                  <TableCell align="right">{_.username}</TableCell>
                  {/* <TableCell align="right">{_.website}</TableCell> */}
                  <TableCell align="right">
                  <Button variant="contained" color="primary"  onClick={()=>changedelete(_._id)}>
                         Delete
                  </Button>
                    
                    </TableCell>
                    <TableCell align="right">
                  <Button variant="contained" color="primary" onClick={handleClickOpen(_._id)}>
                         Edit
                  </Button>
                    
                    </TableCell>

           
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    
    </>
    
  )
}

export default App