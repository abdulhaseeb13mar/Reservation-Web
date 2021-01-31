import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddPassenger from "../components/AddPassenger/AddPassenger";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add-passenger" component={AddPassenger} />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(Routes);
