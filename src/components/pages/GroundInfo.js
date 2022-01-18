import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
const GroundInfo = () => {

  //ptk commited
 //const users = [ {name: "", username: "", email: "", phone: "",webiste: "" }, {name: "ptk", username: "", email: "", phone: "",webiste: "" }];
        // const [ground, setUser] = useState({
        //   floor: "",
        //   type: "",
        //   roof: "",
        //   phone: "",
        //   date: ""
        // });
        //test
        const [ground, setUser] = useState([]);

        useEffect(() => {
          loadUsers();
        }, []);
        const loadUsers = async () => {
          const result = await axios.get("http://localhost:3004/ground");
          setUser(result.data.reverse());
        };

        const deleteUser = async id => {
          await axios.delete(`http://localhost:3004/ground/${id}`);
          loadUsers();
        };
        let history= useHistory();
        const edit = (id) => {
      //     pathname: '/note/',
      // search: '?id='+id,
          // /ground/add/${ground.id}
        //  history.push(`/ground/add/${id}`);
         // console.log("edit")
         history.push({
          pathname: '/ground/add/' +id,
          data: id,
           state:true,
        });
        }
    return (
        <div className="container">
          <div className="py-4">
            <h1>Fustal Home</h1>
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Type</th>
                  <th scope="col">Floor</th>
                  <th scope="col">Roof</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>


                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ground.map((ground, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{ground.type}</td>
                    <td>{ground.floor}</td>
                    <td>{ground.roof}</td>
                    <td>{ground.phone}</td>
                    <td>{ground.date}</td>

                    <td>
                      <Link class="btn btn-primary mr-2" 
                        to={`/`}
                      >
                        View
                      </Link>
                      <Link
                        class="btn btn-outline-primary mr-2"
                        onClick={()=> edit(ground.id)}
                        // to={`/ground/add/${ground.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        class="btn btn-danger"
                         onClick={() => deleteUser(ground.id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  };
  
  export default GroundInfo;