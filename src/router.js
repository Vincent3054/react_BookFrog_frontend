import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Demo from "./routes/Demo";
import Login from "./routes/Login";
import Myclass from "./routes/Myclass";
import Record from "./routes/Record";

export default (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Index} />  {/* http://localhost:8000/#/ */}
            <Route path="/demo" exact component={Demo} /> {/* http://localhost:8000/#/demo */}
            <Route path="/Login" exact component={Login} />  {/* http://localhost:8000/#/Login */}
            <Route path="/Myclass" exact component={Myclass} />  {/* http://localhost:8000/#/Myclass */}
            <Route path="/Record" exact component={Record} />  {/* http://localhost:8000/#/Myclass */}
        </Switch>
    </HashRouter>
);
