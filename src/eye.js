import "./App.css"; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from "react";
import axios from "axios";
function Eye() {
    const [appiled, setappiled] = useState([]);
    useEffect(() => {
      fetchblogs();
    }, []);
  
    const fetchblogs = async () => {
      const api = "http://localhost:5020/alladmin";

      try {
        const response = await axios.get(api, {
         
        });
        setappiled(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    return (
      <div>
        <div className="eye">
          <button className="card12">
            <h3 className="heading">Management</h3>
            {appiled.map((blog) => (
                      <div>
                      <div>
              <FontAwesomeIcon className="emailicon" icon={faEnvelope} />
        <span>{blog.email}</span>
            </div>
            <div>
              <FontAwesomeIcon className="emailicon" icon={faPhone} />
              <span>{blog.primarycontact}</span>
            </div>   
                      </div>
                    ))}
           
          </button>
          <button className="card123"></button>
        </div>
      </div>
    );
  }
  
export default Eye;