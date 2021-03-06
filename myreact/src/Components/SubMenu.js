import React,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
display:flex;
color:crimson;
justify-content:space-between;
align-items:center;
padding:20px;
list-style:none;
height:80px;
text-decoration:none;
font-size:18px;
&:hover
{
    background:cyan;
    border-left:4px solid green;
    cursor:pointer;
}
`

const Sidebarlabel = styled.span`margin-left:16px;
`;

const DropdownLink = styled(Link)`background:pink;
height:60px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:violet;
font-size:18px;

&:hover{
    background:indigo;
    cursor:pointer;
}`

const SubMenu = ({item}) => {

    const [subnav,setSubnav] = useState(false)

    const SubnavFunc = () => setSubnav(!subnav)

    return(
        // if item.subNav is true show subnavfunction.
        <>
        <SidebarLink to={item.path} onClick={item.subNav && SubnavFunc}>
        <div>
            {item.icon}
            <Sidebarlabel>{item.title}</Sidebarlabel>
        </div>
        <div>
            {
                item.subNav && subnav 
                        ? item.iconOpened
                        :item.subNav 
                        ? item.iconClosed : null
            }
        </div>
        </SidebarLink>
            {
                subnav && item.subNav.map((item,index)=>{
                    return(
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <Sidebarlabel>{item.title}</Sidebarlabel>
                        </DropdownLink>
                    )
                })
            }
        </>
    )
}

export default SubMenu




