import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
// import {useSearchParams} from "react-dom-native"

const AddGround = () => {
  // const ground = [ {name: "", username: "", email: "", phone: "",webiste: ""  }];
  let history = useHistory();
  let { id } = useParams();
  console.log("URL params " +id)
  const initialState = {
    floor: "",
    type: "",
    roof: "",
    phone: "",
    date: "",
  };
  const [ground, setUser] = useState(initialState);
  const [egState,egSetState ] =useState([]);
    // const [searchParams, setSearchParams] = useSearchParams();
  // var val =searchParams.get("id")
  // let [searchParams, setSearchParams] = useSearchParams();
  // let [query, setQuery] = React.useState(
  //   searchParams.get("query")
  // );

  // useEffect(() => {
  //   // dispatch(noteAction.getNote());
  // }, [dispatch, match.params.id]);
  //  console.log(mat.params.id);

   console.log(egState);
  const { floor, type, roof, phone, date } = ground;
  const onInputChange = (e) => {
    setUser({ ...ground, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(id);
    if (id !== undefined && id !== "") {
      loadUser();
    } 
    // else { 
    //   setUser({ ...ground, initialState })
    // }
   // loadInput();
  }, [id]);

  const loadInput =   () => {
    console.log("Load inputt")
    setName("new ");
    setUser(initialState);
    // loadUser();
  };
  const loadUser = async () => {
    
    if (id !== undefined && id != "") {
      const result = await axios.get(`http://localhost:3004/ground/${id}`);
      setUser(result.data);
      egSetState(result.data);
      
    } 
    else {
      try {
        // console.log("try");
        setUser({});
      } catch (e) {
        console.log(e);
      }
    }
  };
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      var status = await axios.post("http://localhost:3004/ground", ground);
      //  console.log
      if (status.status == "200") {
        history.push("/groundinfo");
        console.log("status 200");
      } else {
        history.push("/groundinfo");
        console.log(status);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const [name, setName] = useState("");
console.log(floor)
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">
          {id !== undefined ? "Update " : name} Ground
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your floor"
              name="floor"
            defaultValue={floor ||  ""}  
            //value={floor}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your type"
              name="type"
              value={type}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your roof"
              name="roof"
              value={roof}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your phone"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your date"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">
            {id !== undefined ? "Update " : "Add New "} Ground
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddGround;
