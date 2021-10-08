import { Route, Redirect } from "react-router-dom";

const PagesRoute = ({ children, isAuthenticated = false, ...rest }) => {
  React.useEffect(() => {
    document.title = rest.title;
  }, [rest.title]);

  switch (rest.public) {
    case true:
      return <Route {...rest}>{children}</Route>;

    default:
      return isAuthenticated ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect
          to={{
            pathname: "/dashboard/login",
            state: { from: location },
          }}
        />
      );
  }
};

export default PagesRoute;
