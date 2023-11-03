import React from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from '../form/Review';
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "../SidebarData";
import { IconContext } from "react-icons";
import { useState } from 'react';

const SimpleForm = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <span class="material-symbols-outlined">close</span>
          <ChatBot className="chatbot"
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: 'name',
              },
              {
                id: 'name',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}! What is your gender?',
                trigger: 'gender',
              },
              {
                id: 'gender',
                options: [
                  { value: 'male', label: 'Male', trigger: '5' },
                  { value: 'female', label: 'Female', trigger: '5' },
                ],
              },
              {
                id: '5',
                message: 'How old are you?',
                trigger: 'age',
              },
              {
                id: 'age',
                user: true,
                trigger: '7',
                validator: (value) => {
                  if (isNaN(value)) {
                    return 'value must be a number';
                  } else if (value < 0) {
                    return 'value must be positive';
                  } else if (value > 120) {
                    return `${value}? Come on!`;
                  }

                  return true;
                },
              },
              {
                id: '7',
                message: 'Great! Check out your summary',
                trigger: 'review',
              },
              {
                id: 'review',
                component: <Review />,
                asMessage: true,
                trigger: 'update',
              },
              {
                id: 'update',
                message: 'Would you like to update some field?',
                trigger: 'update-question',
              },
              {
                id: 'update-question',
                options: [
                  { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                  { value: 'no', label: 'No', trigger: 'end-message' },
                ],
              },
              {
                id: 'update-yes',
                message: 'What field would you like to update?',
                trigger: 'update-fields',
              },
              {
                id: 'update-fields',
                options: [
                  { value: 'name', label: 'Name', trigger: 'update-name' },
                  { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                  { value: 'age', label: 'Age', trigger: 'update-age' },
                ],
              },
              {
                id: 'update-name',
                update: 'name',
                trigger: '7',
              },
              {
                id: 'update-gender',
                update: 'gender',
                trigger: '7',
              },
              {
                id: 'update-age',
                update: 'age',
                trigger: '7',
              },
              {
                id: 'end-message',
                message: 'Thanks! Your data was submitted successfully!',
                end: true,
              },
            ]}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              const { title, path, icon, cName } = item;
              return (

                <li key={index} className={cName}>
                  <Link to={path}>
                    {icon}
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default SimpleForm;
