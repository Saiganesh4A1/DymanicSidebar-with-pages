import React from "react";


const Aboutpage = () => {
// const [data,setData]=useState({fname:'',lname:'',user:'',mail:'',pwd:''})

// const onSubmit = (e) => {
//     e.preventDefault()
//     console.log(data)
// }

    return(
        <div>
          <h1>About React</h1>
          <p>React Native is a rapidly growing native app development framework </p><p>nowadays and everybody is contributing so many new things in React Native daily, that is why you can see many updates in the components and libraries but don’t worry, I will keep my posts updated. If you see below you will find the recently updated posts of this section.</p>
          <p>React is a JavaScript library created by Facebook</p>

<p>React is a User Interface (UI) library</p>

<p>React is a tool for building UI components</p>
        </div>
    )
}

export default Aboutpage

// formcontrol --to increase textbox size
// formlabel--small margin diff between label and textbox
// we give spread operator data is not change otherwise it will change


/*-
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

-----About component jsx created and removed--
<form>
            <div class="mb-3">
    <label for="fname" class="form-label">First Name</label>
    <input type="text" class="form-control" value={data.fname} onChange={e=>setData({...data,fname:e.target.value})} id="fname" />
  </div>
  <div class="mb-3">
    <label for="lname" class="form-label">Last Name</label>
    <input type="text" class="form-control" value={data.lname} onChange={e=>setData({...data,lname:e.target.value})} id="lname" />
  </div>
  <div class="mb-3">
    <label for="uname" class="form-label">User Name</label>
    <input type="text" class="form-control" value={data.user} onChange={e=>setData({...data,user:e.target.value})} id="uname" />
  </div>
  <div class="mb-3">
    <label for="mail" class="form-label">Email address</label>
    <input type="email" class="form-control" value={data.mail} onChange={e=>setData({...data,mail:e.target.value})} id="mail" />
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password</label>
    <input type="password" class="form-control" value={data.pwd} onChange={e=>setData({...data,pwd:e.target.value})} id="pwd"/>
  </div>
  <button type="submit" onClick={onSubmit} class="btn btn-primary">Submit</button>
</form>
        <table border="1px solid">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email ID</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.user}</td>
                    <td>{data.mail}</td>
                    <td>{data.pwd}</td>
                </tr>
            </tbody>
        </table>

 


-*/