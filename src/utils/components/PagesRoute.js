import { Route, Redirect } from "react-router-dom";

const PagesRoute = ({ children, isAuthenticated = false, ...rest }) => {
  React.useEffect(() => {
    document.title = rest.title;
  }, [rest.title]);

  switch (rest.public) {
    case true:
      return <Route {...rest} render={() => children} />;

    default:
      return (
        <Route
          {...rest}
          render={({ location }) =>
            isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/dashboard/login",
                  state: { from: location },
                }}
              />
            )
          }
        />
      );
  }
};

export default PagesRoute;
