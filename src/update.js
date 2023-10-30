import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Update = () => {
  let navigate = useNavigate();

  const { email } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [individualInstitute, setIndividualInstitute] = useState({
    sno: "",
    name: "",
    email: "",
    head: "",
    secondaryemail: "",
    userscount: "",
    primarycontact: "",
    secondarycontact: "",
    address: "",
    city: "",
    password: "",
    InstitutionType: "",
    Accessplan: "",
    code: ""
  });


  const onChangeInstituteName = (e) => {
    const newValue = e.target.value;
    setIndividualInstitute((prevData) => ({
      ...prevData,
      InstituteName: newValue,
    }));
  };



  const onSubmitForm = (e) => {
    e.preventDefault();


    const UserData = {
      sno: individualInstitute.sno,
      name: individualInstitute.name,
      email: individualInstitute.email,
      secondaryemail: individualInstitute.secondaryemail,
      head: individualInstitute.head,
      userscount: individualInstitute.userscount,
      code: individualInstitute.code,
      primarycontact: individualInstitute.primarycontact,
      secondarycontact: individualInstitute.secondarycontact,
      address: individualInstitute.address,
      city: individualInstitute.city,
      password: individualInstitute.password,
      InstitutionType: individualInstitute.InstitutionType,
      Accessplan: individualInstitute.Accessplan,
    };

    axios
      .put("http://localhost:5020/update-data/" + email, UserData)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          toast.success("Update Successful", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(function () {
            navigate("/admin");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the institute.");
        console.log(error.message);
      });
  };


  useEffect(() => {
    const fetchData = async () => {
      console.log(email);
      try {
        const response = await axios.get(
          "http://localhost:5020/alladmin/" + email
        ); // Replace with your API endpoint
        setIndividualInstitute(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : individualInstitute ? (
        <div>
          <div className="modal-dialog1">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Institute</h4>
                <Link to="/admin">
                  <button type="button" className="btn-close"></button>
                </Link>
              </div>
              <div className="modal-body text-start">
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <form action="" onSubmit={onSubmitForm}>
                  <div className="col-12 col-md-6 m-2">
                    <label className="profilename">S NO :</label>
                    <br />

                    <input
                      type="text"
                      id="instituteName"
                      className="form-control"
                      style={{
                        border: "1px solid black",
                      }}
                      placeholder="Enter Institute Name"
                      value={individualInstitute.sno}
                      onChange={(e) =>
                        setIndividualInstitute({
                          ...individualInstitute,
                          sno: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-6 m-2">
                    <label className="profilename">Institute Name :</label>
                    <br />

                    <input
                      type="text"
                      id="instituteName"
                      className="form-control"
                      style={{
                        border: "1px solid black",
                      }}
                      placeholder="Enter Institute Name"
                      value={individualInstitute.name}
                      onChange={(e) =>
                        setIndividualInstitute({
                          ...individualInstitute,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-6 m-2">
                    <label className="profilename">Head Name :</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        border: "1px solid black",
                      }}
                      placeholder="Enter Head Name"
                      value={individualInstitute.head}
                      onChange={(e) =>
                        setIndividualInstitute({
                          ...individualInstitute,
                          head: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label className="profilename">Primary Email :</label>
                      <br />
                      <input
                        type="text"
                        className="form-control12"
                        style={{
                          border: "1px solid black",
                        }}
                        placeholder="Enter Primary Email"
                        value={individualInstitute.email}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="profilename">
                        Primary Contact Number :
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control13"
                        style={{
                          border: "1px solid black",
                        }}
                        placeholder="Enter Primary Contact Number"
                        value={individualInstitute.primarycontact}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            primarycontact: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label className="profilename">Secondary Email :</label>
                      <br />
                      <input
                        type="text"
                        className="form-control12"
                        style={{
                          border: "1px solid black",
                        }}
                        placeholder="Enter Secondary Email"
                        value={individualInstitute.secondaryemail}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            secondaryemail: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 col-md-6 ">
                      <label className="profilename">
                        Secondary Contact Number :
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control13"
                        style={{
                          border: "1px solid black",
                        }}
                        placeholder="Enter Secondary Contact Number"
                        value={individualInstitute.secondarycontact}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            secondarycontact: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 m-2">
                    <label className="profilename">Address :</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        border: "1px solid black",
                      }}
                      placeholder="Enter Address"
                      value={individualInstitute.address}
                      onChange={(e) =>
                        setIndividualInstitute({
                          ...individualInstitute,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-6 m-2">
                    <label className="profilename">City Name :</label>
                    <br />
                    <input
                      type="text"
                      className="form-controll"
                      style={{
                        border: "1px solid black",
                      }}
                      placeholder="Enter City Name"
                      value={individualInstitute.city}
                      onChange={(e) =>
                        setIndividualInstitute({
                          ...individualInstitute,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-6 m-2">
                    <label className="profilename">Institute Code :</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        border: "1px solid black",
                      }}
                      placeholder="Enter Institute Code"
                      value={individualInstitute.code}
                      onChange={(e) =>
                        setIndividualInstitute({
                          ...individualInstitute,
                          code: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className=" mt-3">
                    <div className="col-12 col-md-6 m-2">
                      <label className="profilename">Institute Type :</label>
                      <br />
                      <select
                        className="w-100 p-2"
                        style={{
                          borderRadius: "10px",
                          border: "1px solid black",
                        }}
                        value={individualInstitute.InstitutionType}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            InstitutionType: e.target.value,
                          })
                        }
                      >
                        <option>School</option>
                        <option>Collage</option>
                        <option>University</option>
                        <option>Education Society</option>
                        <option>Training Institute</option>
                        <option>NGOs</option>
                      </select>
                    </div>
                    <br />

                    <div className="col-12 col-md-6 m-2">
                      <label className="profilename">Access Plans :</label>
                      <br />
                      <select
                        className="w-100 p-2"
                        style={{
                          borderRadius: "10px",
                          border: "1px solid black",
                        }}
                        value={individualInstitute.Accessplan}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            Accessplan: e.target.value,
                          })
                        }
                      >
                        <option>Exam Practice</option>
                        <option>LMS</option>
                        <option>Mock Interview</option>
                        <option>Previous papers</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 m-2">
                      <label className="loginemail">Password :</label>
                      <br />
                      <input
                        type="text"
                        className="logininput1"
                        style={{
                          border: "1px solid black",
                        }}
                        placeholder="Enter Password"
                        value={individualInstitute.password}
                        onChange={(e) =>
                          setIndividualInstitute({
                            ...individualInstitute,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Add other form fields here */}
                  <div className="modal-footer mt-3">
                    <button type="submit" className="btn btn-danger">
                      Update
                    </button>
                  </div>
                  <p>{error}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default Update;