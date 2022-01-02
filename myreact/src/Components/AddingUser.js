import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddingUser = (props) => {

    const Navigate=useNavigate()

    const [Id,setId] = useState("")
    const [fname,setFname]= useState("")
    const [lname,setLname]= useState("")
    const [email,setEmail]=  useState("")

    const {users,setUsers} = props

    const onidchanger = (e) => {
        setId(e.target.value)
    }

    const onfnamechanger = (e) => {
        setFname(e.target.value)
    }

    const onlnamechanger = (e) => {
        setLname(e.target.value)
    }

    const onemailchanger = (e) => {
        setEmail(e.target.value)
    }

    const onclicking = (e) => {
        e.preventDefault()
        setUsers([users,{"Id":Id,"fname":fname,"lname":lname,"email":email}])
        console.log(users)
        Navigate("/",{state:{from:{path:"/addusers"}}})
    }


    return (
        <div>
            <h1>User Details</h1>
            <form className='bg-primary'>
  <div className="mb-3">
    <label htmlFor="id" className="form-label">Id</label>
    <input type="text" className="form-control" id="id"
    value={Id} onChange={onidchanger}/>
  </div>
  <div className="mb-3">
    <label htmlFor="fn" className="form-label">First Name</label>
    <input type="text" className="form-control" id="fn"
    value={fname} onChange={onfnamechanger}/>
  </div>
  <div className="mb-3">
    <label htmlFor="ln" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="ln"
    value={lname} onChange={onlnamechanger}/>
  </div>
  <div className="mb-3">
    <label htmlFor="em" className="form-label">Email</label>
    <input type="email" className="form-control" id="em"
    value={email} onChange={onemailchanger}/>
  </div>
  <button type="submit" onClick={onclicking} className="btn btn-info">Submit</button>
</form>
        </div>
    )
}

export default AddingUser
