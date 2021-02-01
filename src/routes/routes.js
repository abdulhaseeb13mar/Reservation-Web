import React, { useContext } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Login from "../components/Login/Login";
import AdminRoutes from "./adminRoutes";
import { UserContext } from "../store/Store";

function Routes(props) {
  const [user, setUser] = useContext(UserContext);

  return (
    <Switch>
      {user ? (
        <>
          <Route path="/" component={AdminRoutes} />
          <Redirect to="/" />
        </>
      ) : (
        <>
          {" "}
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </>
      )}
    </Switch>
  );
}

export default withRouter(Routes);
