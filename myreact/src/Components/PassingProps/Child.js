import React from "react";

const Child = (props) => {
    return(
        <div>
            <button onClick={()=>props.changeword('Mr.ganesh')}>Click To Change Title</button>
        </div>
    )
}

export default Child