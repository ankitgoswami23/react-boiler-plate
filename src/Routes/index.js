import React, { Suspense, memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Loader from "../Components/Loader";
import ErrorBoundary from "../Components/ErrorBoundary";
import routes from "./Routes";

// eslint-disable-next-line
const Routes = memo(() => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((itm) => {
              return (
                <Route
                  key={itm.name}
                  exact={itm.exact}
                  path={itm.path}
                  name={itm.name}
                  component={itm.component}
                />
              );
            })}
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
});

export default Routes;
