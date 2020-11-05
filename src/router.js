import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import Subject from "./routes/Subject";
import Myclass from "./routes/Myclass";
import Nature from "./routes/Nature";
import Teacher from "./routes/Teacher";
import Booklist from "./routes/Booklist";
import Book from "./routes/Book";
import Portfolio from "./routes/Portfolio";
import ExhibitionList from "./routes/ExhibitionList";
import Exhibition from "./routes/Exhibition";
import DRPortfolio from "./routes/DRPortfolio";
import MAPIndex from "./routes/MAPIndex";

export default (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Login} />  {/* http://localhost:8000/#/Login */}
            {/*老師*/}
            <Route path="/Teacher" exact component={Teacher} />  {/* http://localhost:8000/#/Teacher */}
            {/*學生*/}
            <Route path="/Subject" exact component={Subject} />  {/* http://localhost:8000/#/Subject */}
            <Route path="/Myclass" exact component={Myclass} />  {/* http://localhost:8000/#/Myclass */}
             {/*下一層*/}
            <Route path="/Nature" exact component={Nature} />  {/* http://localhost:8000/#/Nature */}
             {/*書*/}
            <Route path="/booklist" exact component={Booklist} /> {/* http://localhost:8000/#/booklist */}
            <Route path="/book" exact component={Book} /> {/* http://localhost:8000/#/book */}
            {/*展覽*/}
            <Route path="/exhibitionlist" exact component={ExhibitionList} /> {/* http://localhost:8000/#/exhibitionlist */}
            <Route path="/exhibition" exact component={Exhibition} /> {/* http://localhost:8000/#/exhibition */}
            {/*學習歷程*/}
            <Route path="/portfolio" exact component={Portfolio} /> {/* http://localhost:8000/#/portfolio */}
            <Route path="/drportfolio" exact component={DRPortfolio} /> {/* http://localhost:8000/#/drportfolio */}
            {/*地圖*/}
            <Route path="/mapindex" exact component={MAPIndex}/> {/* http://localhost:8000/#/mapindex */}


        </Switch>
    </HashRouter>
);
