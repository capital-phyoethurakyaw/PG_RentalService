// import React from "react";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Navbar from "./components/layout/Navbar";
// import GroundInfo from "./components/pages/GroundInfo";
// import AddGround from "./components/ground/AddGround";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   withRouter
// } from "react-router-dom";
// import NotFound from "./components/pages/NotFound";
// import AddUser from "./components/users/AddUser";
// import EditUser from "./components/users/EditUser";
// import User from "./components/users/User";

// function App(props) {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/users/add" component={AddUser} /> 
//           <Route exact path="/users/edit/:id" component={EditUser} />
//           <Route exact path="/users/:id" component={User} />  
//           <Route exact path="/ground/add/:id" component={AddGround} />
//           <Route exact path="/ground/add" component={AddGround} />
//           <Route exact path="/groundinfo" component={GroundInfo} />


//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Example;

import React, { useEffect, useState } from "react";
export default function App(){

  const [resourceType, SetResourceType]= useState('post');
  // console.log('render')
  useEffect(()=> {
    console.log('resource type have changed '+ resourceType)
  }, [])
  return (
    <>
    <div>
    <button onClick={() => SetResourceType('post')}> post </button>
    <button onClick={() => SetResourceType('user')}> user </button>
    <button onClick={() => SetResourceType('comment')}> comment </button>
   
    </div>
    <h1> {resourceType} </h1>
    </>
  )
}