import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import {RxDashboard} from 'react-icons/rx'
import {AiTwotoneFolderOpen} from 'react-icons/ai'
const sidebarData = [
   
  {
    title: "Dashboard",
    path: "/dashbord",
    icon: <RxDashboard/>,
    cName: "nav-text"
  },
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Users",
    path: "/admin",
    icon: <IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Assessment",
    path: "/assessment",
    icon: <AiTwotoneFolderOpen />,
    cName: "nav-text", 
  }
];

export default sidebarData;

