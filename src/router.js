import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Demo from "./routes/Demo";


export default (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Index} />  {/* http://localhost:8000/#/ */}
            <Route path="/demo" exact component={Demo} /> {/* http://localhost:8000/#/demo */}
        </Switch>
    </HashRouter>
);
