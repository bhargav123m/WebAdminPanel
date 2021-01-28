import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "../App";
import Notfound from "../NotFound";


const UiRouter = () => {

return(
  <Router >
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={Notfound} />
    </Switch>
  </Router>
  )
}
export default UiRouter;
