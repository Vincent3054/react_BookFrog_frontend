import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Demo from "./routes/Demo";
import Booklist from "./routes/Booklist";
import Book from "./routes/Book";




export default (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Index} />  {/* http://localhost:8000/#/ */}
            <Route path="/demo" exact component={Demo} /> {/* http://localhost:8000/#/demo */}
            <Route path="/booklist" exact component={Booklist} /> {/* http://localhost:8000/#/booklist */}
            <Route path="/book" exact component={Book} /> {/* http://localhost:8000/#/book */}


        </Switch>
    </HashRouter>
);
