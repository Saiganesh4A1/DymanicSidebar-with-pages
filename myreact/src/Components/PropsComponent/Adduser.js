import React,{useState} from "react";

const Adduser = () => {
const [name,setName]=useState({firstname:'',lastname:''})

const onSubmit = (e) => 
{
    e.preventDefault()
}

    return(
        <div>
            <form>
                FirstName:<input type="text" id="txtfirst" name="fn" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>
                <br></br>
                LastName:<input type="text" id="txtlast" name="fn" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
                <button onClick={onSubmit}>click</button>
            </form>
            <table border="1px solid">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name.firstname}</td>
                        <td>{name.lastname}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Adduser

// an empty object contain firstname and lastname intialized to an empty string.
// now we have a state variable called name and setname to update state variable.
//here we use ...name is spread operator