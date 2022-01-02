import React,{useState} from "react";

const Adduser = () => {
  
    const [user,setUser]=useState({
      firstname:"",
      lastname:"",
      email:""
    })

    // useEffect(()=>{
    //   localStorage.setItem('lists',JSON.stringify(user))
    // },[user])

 const onSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      document.getElementById("divresult1").innerHTML=user.firstname
      document.getElementById("divresult2").innerHTML=user.lastname
      document.getElementById("divresult3").innerHTML=user.email
    }
return(
        <div>
            <form>
  <div className="mb-3">
    <label htmlFor="fname" className="form-label">First Name</label>
    <input type="text" name="firstname" className="form-control" id="fname" 
   value={user.firstname} onChange={e=>setUser({...user,firstname:e.target.value})} />
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label">Last Name</label>
    <input type="text" name="lastname" className="form-control" id="lname" 
    value={user.lastname} onChange={e=>setUser({...user,lastname:e.target.value})}  />
  </div>
  <div className="mb-3">
    <label htmlFor="mail" className="form-label">Email ID</label>
    <input type="email" name="email" className="form-control" id="mail" 
    value={user.email} onChange={e=>setUser({...user,email:e.target.value})}  />
  </div>
  <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
</form>
<br></br>
<table className="table border shadow">
  <thead className='thead-dark'>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email ID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="divresult1"></td>
      <td id="divresult2"></td>
      <td id="divresult3"></td>
    </tr>
  </tbody>
  </table>
        </div>

    )
}

export default Adduser




 




