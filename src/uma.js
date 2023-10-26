import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home1 = () => {

    const navigate = useNavigate()
    const [showLinks, setShowLinks] = useState(false);
    const [bloglist, setbloglist] = useState([]);

    const handleEmailSubmit = () => {
        // You can add validation here if needed
        console.log("Email:", emaildash);
        navigate(`/detial?emaildash=${emaildash}`);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:5020/allhome");
            setbloglist(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const [s_no, sets_no] = useState("");
    const [name, setname] = useState("");
    const [emaildash, setemaildash] = useState("");
    const [head, sethead] = useState("");
    const [userscount, setuserscount] = useState("");
    const [code, setcode] = useState("");
    const [primary_contact, setprimary_contact] = useState("");
    const [secondary_email, setsecondary_email] = useState("");
    const [secondary_contact, setsecondary_contact] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [institite_type, setinstitite_type] = useState("");
    const [access_plan, setaccess_plan] = useState("");
    const [password_model, setpassword_model] = useState("");



    const [data, setdata] = useState([]);


    const userData = {
        s_no: s_no,
        name: name,
        emaildash: emaildash,
        head: head,
        userscount: userscount,
        code: code,
        primary_contact: primary_contact,
        secondary_email: secondary_email,
        secondary_contact: secondary_contact,
        address: address,
        city: city,
        institite_type: institite_type,
        access_plan: access_plan,
        password_model: password_model,
    };
    console.log(userData);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (s_no && name && emaildash && head && userscount && code && primary_contact && secondary_email && secondary_contact && address && city && institite_type && access_plan && password_model !== "") {
            const headers = {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUzMTEyODdiY2M1OWY1MzRhYzI5MTE2IiwiaWF0IjoxNjk3NzE0ODI0LCJleHAiOjE2OTc3MTQ4ODR9.0DzYRs7ZUM9sjN89RlaOO2zg8Z6Mi_xOdzPLtVeuxk8",
            };
            axios
                .post("http://localhost:5020/home", userData, { headers })
                .then((response) => {
                    setdata(response.data);

                    console.log(response.data);
                    if (response.status === 200) {
                        toast.success("Registration Successfull", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setTimeout(function () { }, 3000);
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            toast.warning("Enter the Required Details");
        }
    };

    const eyeIcon = (id) => {
        navigate(`/detial/${id}`);
    }

    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className={`sidebar col-12 col-md-2 pt-5 mt-5 mb-5 ${showLinks ? 'active' : ''}`}>
                        <div className="row">

                            <img src="https://perfextechnologies.com/assets/img/logo2.png" alt="Logo" className="logo col-md-8" />
                            <div className="col-md-4 mt-3">
                                <button class="navbar-toggler loginbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span class="navbar-toggler-icon bg-light text-light"></span>
                                </button>


                                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul class="navbar-nav login1">
                                        <li class="nav-item ">
                                            <a class="nav-link login2" href="#">DASHBOARD</a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link login2" href="#">HOME</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-2">

                    </div>


                    <div className="col-12 col-md-10 secondpart pt-5 mt-5 mb-5">
                        <div className="row">
                            <h4 className="col-12 col-md-3">Institutions</h4>
                            <p className="col-12 col-md-8"></p>


                            <div class="container mt-3 col-md-1">
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#myModal">
                                    <i className="fa-solid fa-pen-to-square" style={{ fontSize: "30px" }}></i>
                                </button>
                            </div>
                            <ToastContainer
                                position="top-right"
                                autoClose={1000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                            />


                            <div class="modal" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <label>S.NO</label>
                                            <input type="text" placeholder="enter your serial number" className="w-100" onChange={(e) => sets_no(e.target.value)} value={s_no} />
                                            <label className="mt-2">Institution Name</label>
                                            <input type="text" placeholder="enter your Institution name" className="w-100" onChange={(e) => setname(e.target.value)} value={name} />
                                            <label className="mt-2">Head Name</label>
                                            <input type="text" placeholder="enter your head name" className="w-100" onChange={(e) => sethead(e.target.value)} value={head} />
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Primary Email</label><br />
                                                    <input type="text" placeholder="enter your email" className="w-100" onChange={(e) => setemaildash(e.target.value)} value={emaildash} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Primary Contact</label><br />
                                                    <input type="text" placeholder="enter your contact" className="w-100" onChange={(e) => setprimary_contact(e.target.value)} value={primary_contact} />

                                                </div>
                                                <div className="col-md-6 mt-2">
                                                    <label>Secondary Email</label><br />
                                                    <input type="text" placeholder="enter your email" className="w-100" onChange={(e) => setsecondary_email(e.target.value)} value={secondary_email} />
                                                </div>
                                                <div className="col-md-6 mt-2">
                                                    <label>Secondary Contact</label><br />
                                                    <input type="text" placeholder="enter your contact" className="w-100" onChange={(e) => setsecondary_contact(e.target.value)} value={secondary_contact} />

                                                </div>


                                            </div>
                                            <label className="mt-2">Address</label>
                                            <input type="text" placeholder="enter your address" className="w-100" onChange={(e) => setaddress(e.target.value)} value={address} />
                                            <label className="mt-2"> City name</label>
                                            <input type="text" placeholder="enter your city name" className="w-100" onChange={(e) => setcity(e.target.value)} value={city} />
                                            <label className="mt-2">Institution code</label>
                                            <input type="text" placeholder="enter your Institution code" className="w-100" onChange={(e) => setcode(e.target.value)} value={code} />
                                            <label className="mt-2">Userscount</label>
                                            <input type="text" placeholder="enter your Userscount" className="w-100" onChange={(e) => setuserscount(e.target.value)} value={userscount} />
                                            <label className="mt-2">Institution type</label><br />
                                            <select className="w-100" onChange={(e) => setinstitite_type(e.target.value)} value={institite_type}>
                                                <option>choose one</option>
                                                <option value="Online">Online</option>
                                                <option value="Offline">Offline</option>
                                                <option value="Both">Both</option>

                                            </select>
                                            <label className="mt-2">Access plan</label><br />
                                            <select className="w-100" onChange={(e) => setaccess_plan(e.target.value)} value={access_plan}>
                                                <option>choose one</option>
                                                <option value="Exam practice">Exam practice</option>
                                                <option value="Interview practice">Interview practice</option>
                                                <option value="Both">Both</option>
                                            </select>
                                            <label className="mt-2">Password</label><br />
                                            <input type="password" placeholder="enter password" className="w-100" onChange={(e) => setpassword_model(e.target.value)} value={password_model} />
                                            <button className="btn btn-primary mt-3" onClick={(e) => handleSubmit(e)}>ADD DETAILS</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <table className="table-style">
                                    <tr className="tr-style">
                                        <th className="th-style">S.NO</th>
                                        <th className="th-style">NAME</th>
                                        <th className="th-style">EMAIL</th>
                                        <th className="th-style">HEAD</th>
                                        <th className="th-style">USERS COUNT</th>
                                        <th className="th-style">CODE</th>
                                        <th className="th-style">ACTIONS</th>
                                    </tr>
                                    {bloglist.map((blog) => (
                                        <tr key={blog.s_no}>
                                            <td className="td-style">{blog.s_no}</td>
                                            <td className="td-style">{blog.name}</td>
                                            <td className="td-style">{blog.emaildash}</td>
                                            <td className="td-style">{blog.head}</td>
                                            <td className="td-style">{blog.userscount}</td>
                                            <td className="td-style">{blog.code}</td>
                                            <td className="td-style">

                                                <Link to={`/detial?emaildash=${blog.emaildash}`} className="fa-solid fa-eye col-md-3"></Link>


                                                <i className="fa-solid fa-pen-to-square col-md-3"></i>
                                                <i class="fa-solid fa-trash col-md-3"></i>
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>





                </div>


            </div>
        </div>
    )
}
export default Home1;