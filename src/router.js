import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Demo from "./routes/Demo";
import Login from "./routes/Login";
import Subject from "./routes/Subject";
import Myclass from "./routes/Myclass";
import Record from "./routes/Record";
import Nature from "./routes/Nature";
export default (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Index} />  {/* http://localhost:8000/#/ */}
            <Route path="/demo" exact component={Demo} /> {/* http://localhost:8000/#/demo */}
            <Route path="/Login" exact component={Login} />  {/* http://localhost:8000/#/Login */}
            <Route path="/Subject" exact component={Subject} />  {/* http://localhost:8000/#/Subject */}
            <Route path="/Myclass" exact component={Myclass} />  {/* http://localhost:8000/#/Myclass */}
            <Route path="/Record" exact component={Record} />  {/* http://localhost:8000/#/Myclass */}
             {/*下一層*/}
             <Route path="/Nature" exact component={Nature} />  {/* http://localhost:8000/#/Nature */}
        </Switch>
    </HashRouter>
);
