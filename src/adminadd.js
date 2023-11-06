import React from 'react'
import "./App.css"; // You can create an App.css file for styling
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from 'react';
function Adminadd() {
    const [sno, setsno] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [head, sethead] = useState("");
    const [secondaryemail, setsecondaryemail] = useState("");
    const [userscount, setuserscount] = useState("");
    const [primarycontact, setprimarycontact] = useState("");
    const [secondarycontact, setsecondarycontact] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [password, setpassword] = useState("");
    const [code, setcode] = useState("");
    const [InstitutionType, setInstitutionType] = useState("");
    const [Accessplan, setAccessplan] = useState("");
  
    const [data2, setdata2] = useState([]);
    const useData2 = {
        sno: sno,
        name: name,
        email: email,
        head: head,
        secondaryemail: secondaryemail,
        userscount: userscount,
        primarycontact: primarycontact,
        secondarycontact: secondarycontact,
        address: address,
        city: city,
        password: password,
        code: code,
        InstitutionType: InstitutionType,
        Accessplan: Accessplan
      };
    const onSubmitForm3 = (e) => {
        e.preventDefault();
    
        if (sno, name, email, head, secondaryemail, userscount, primarycontact, secondarycontact, address, city, password,
        code,InstitutionType,Accessplan !== "") {
          axios
            .post("http://localhost:5020/admin", useData2)
            .then((response) => {
              setdata2(response.data);
    
              console.log(response.data);
              toast.success("Registration Successfull");
            })
            .catch((error) => {
              console.log(error.message);
            });
        } else {
          toast.warning("Enter the Required Details");
        }
      };
  return (
    <div>
       
              <div class="card23">
                <div class="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div class="modal-header">

                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                     
                    ></button>
                 
                  </div>

                  {/* <!-- Modal body --> */}
                  <div class="modal-body">
                    <div class="container text-start">
                      <div class="row">
                        <div class="col-md-7">
                          <form class="">
                            <label for="" class="profilename">
                              S.NO
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your full institution"
                              class="form-control"
                              onChange={(e) => setsno(e.target.value)}
                              value={sno}

                            />
                            <label for="" class="profilename">
                              Institution Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your full institution"
                              class="form-control"
                              onChange={(e) => setname(e.target.value)}
                              value={name}

                            />
                            <label for="" class="profilename">
                              Head Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your full institution"
                              class="form-control"
                              onChange={(e) => sethead(e.target.value)}
                              value={head}
                            />
                            <div class="d-flex flex-row">
                              <div class="col-md-6 aa">
                                <label for="" class="profilename">
                                  Primary email
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter  Primary email"
                                  class="form-control12"
                                  onChange={(e) => setemail(e.target.value)}
                                  value={email}
                                />
                              </div>
                      
                              <div class="col-md-4">
                                <label for="" class="profilename">
                                  Primary Contact
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter your  Primary count"
                                  class="form-control13"
                                  onChange={(e) => setprimarycontact(e.target.value)}
                                  value={primarycontact}
                                />
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="col-md-6 aa">
                                <label for="" class="profilename">
                                  Secondary email
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter Secondary email"
                                  class="form-control12"
                                  onChange={(e) => setsecondaryemail(e.target.value)}
                                  value={secondaryemail}
                                />
                              </div>
                              
                              <div class="col-md-4">
                                <label for="" class="profilename">
                                  Secondary Contact
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter your  Secondary count"
                                  class="form-control13"
                                  onChange={(e) => setsecondarycontact(e.target.value)}
                                  value={secondarycontact}
                                />
                              </div>
                            </div>
                            <label for="" class="profilename">
                              Address
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your Address"
                              class="form-control"
                              onChange={(e) => setaddress(e.target.value)}
                              value={address}
                            />
                            <label for="" class="profilename">  City Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your City"
                              class="form-control"
                              onChange={(e) => setcity(e.target.value)}
                              value={city}
                            />

                            <label for="institution-code" class="profilename">
                              Institution code</label><br />
                            <input
                              type="text"
                              placeholder="Enter your Code"
                              class="form-control"
                              onChange={(e) => setcode(e.target.value)}
                              value={code}
                            />
                            <br />

                            <label for="institution-code" class="profilename">
                              Userscount</label><br />
                            <input
                              type="text"
                              placeholder="Enter your Count"
                              class="form-control"
                              onChange={(e) => setuserscount(e.target.value)}
                              value={userscount}
                            />
                            <br />
                            <label for="" class="profilename"> Institution Type</label><br />
                            <select name="sort-order" id="sort-order"onChange={(e) => setInstitutionType(e.target.value)}
                              value={InstitutionType}>
                              <option value="asc">School</option>
                              <option value="desc">Collage</option>
                              <option value="desc">Trinning</option>
                              <option value="desc">NGO</option>
                            </select>
                            <br />
                            <label for="" class="profilename">  Access plan </label><br />
                            <select name="sort-order" id="sort-order"onChange={(e) => setAccessplan(e.target.value)}
                              value={Accessplan}>
                              <option value="asc">Exam practice</option>
                              <option value="desc">LMS</option>
                              <option value="desc">College</option>
                              <option value="desc">NGO</option>
                            </select>
                            <br />
                            <label htmlFor="password" className="loginemail">Password</label><br />
                            <div className="input-container">
                              <input
                                type="password"
                                name="password"
                                id="password"
                                className="logininput1"
                                onChange={(e) => setpassword(e.target.value)}
                                value={password}
                                placeholder="Minimum 6 characters"

                              />
                            
                            </div>

                          
                            <button class="profilebutton" onClick={onSubmitForm3}>Add Details</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
           
    </div>
  )
}

export default Adminadd