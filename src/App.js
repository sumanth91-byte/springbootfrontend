import "./App.css";

import HeaderComponent from "./Components/HeaderComponent";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import CreateEmployeeComponent from "./Components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./Components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./Components/ViewEmployeeComponent";
import Home from "./Components/Loginpage";
import Register from "./Components/Register";
//import { Switch } from "@material-ui/core";
import { Routes } from "react-router-dom";

function App() {
  return ( 
    <div>
      <Router>
        {/* <HeaderComponent /> */}
        <div className="contain">
          <Routes>
            {/* <Route exact path="/"  element={<ListEmployeeComponent />}></Route> */}
            <Route path="/" element={< Home/>} />
            <Route path="/register" element={< Register/>} />
            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            ></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            <Route path ="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
            <Route path ="/view-employee/:id"  element= {<ViewEmployeeComponent/>}></Route>
            {/* <ListEmployeeComponent /> */}
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
