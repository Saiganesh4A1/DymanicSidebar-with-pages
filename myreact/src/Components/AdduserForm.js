import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';

const AdduserForm = (props) => {

    const [userId,setUserId] = useState("")
    const [fname,setFname]= useState("")
    const [lname,setLname]= useState("")
    const [email,setEmail]=  useState("")

    const Navigate=useNavigate();

    const {users,setUsers} = props

    const onidchanger = (e) => {
        setUserId(e.target.value)
    }

    const onfnamechanger = (e) => {
        setFname(e.target.value)
    }

    const onlnamechanger = (e) => {
        setLname(e.target.value)
    }

    const onnamechanger = (e) => {
        setEmail(e.target.value)
    }

    const onclicking = (e) => {
        e.preventDefault()
   const userdata= setUsers([users,{"userId":userId,"fname":fname,"lname":lname,
"email":email}])
Navigate("/",{state:{from:{pathname:"/adduser"}}})
        console.log(userdata)
    }



    return(
        <form>
            <label htmlFor="id">User ID</label>
            <input type="number" id="id" placeholder="enter your ID" 
            value={userId} onChange={onidchanger}/>
            <label htmlFor="fn">FirstName</label>
            <input type="text" id="fn" placeholder="enter your firstname" 
            value={fname} onChange={onfnamechanger}/>
            <label htmlFor="ln">LastName</label>
            <input type="text" id="ln" placeholder="enter your lastname" 
            value={lname} onChange={onlnamechanger}/>
            <label htmlFor="em">Email</label>
            <input type="email" id="em" placeholder="enter your email" 
            value={email} onChange={onnamechanger}/>
            <button type="submit" onClick={onclicking}>Submit</button>
        </form>
    )
}

export default AdduserForm

/*--
const onclicking = (e) => {
        e.preventDefault()
        props.setUser([...props.user,{"userId":userId,"firstname":fname
    ,"lastname":lname,"Email":email}])
        console.log(props.user)
    }--while we are giving o/p on button click we got a error..
    i.e.,Uncaught TypeError: props.user is not iterable
    at onclicking (AdduserForm.js:28)
*/