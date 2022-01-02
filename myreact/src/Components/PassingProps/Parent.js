import React,{useState} from "react";
import Child from "./Child";

const Parent = () => {

    const [word,setWord]=useState('Home')

    return(
        <div>
            <h1>Welcome to {word}</h1>
            <Child changeword={word=>setWord(word)}/>
        </div>
    )
}

export default Parent