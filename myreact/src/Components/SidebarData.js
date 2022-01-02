import React from "react";
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
// import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
    },
    {
                title:'Users',
                path:'/users',
                icon:<FaIcons.FaUserFriends/>,
                // iconClosed:<RiIcons.RiArrowDownSFill/>,
                // iconOpened:<RiIcons.RiArrowUpSFill/>,
                subNav:[
                    {
                        title:'Add User',
                path:'/user/add',
                icon:<FiIcons.FiUserPlus/>,
                    }
                ]
            },
            {
                        title:'Roles',
                        path:'/roles',
                        icon:<MdIcons.MdWork/>
            },
            {
                title:'Permissions',
                path:'/permissions',
                icon:<MdIcons.MdSecurity/>
    }
]













// export const SidebarData = [
//     {
//         title:'Home',
//         path:'/',
//         icon:<AiIcons.AiFillHome/>,
//         cName:'nav-text'
//     },
//     {
//         title:'Users',
//         path:'/user',
//         icon:<FaIcons.FaUserFriends/>,
//         iconClosed:<RiIcons.RiArrowDownSFill/>,
//         iconOpened:<RiIcons.RiArrowUpSFill/>,
//         subNav:[
//             {
//                 title:'Add User',
//         path:'/user/add',
//         icon:<FiIcons.FiUserPlus/>,
//             }
//         ]
//     },
//     {
//         title:'Roles',
//         path:'/roles',
//         icon:<MdIcons.MdWork/>,
//         cName:'nav-text'
//     }
// ]


