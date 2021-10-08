import { Route, Redirect } from "react-router-dom";

const PagesRoute = ({ children, isAuthenticated = false, ...rest }) => {
  React.useEffect(() => {
    document.title = rest.title;
  }, [rest.title]);
console.log('resst', rest);
  switch (rest.public) {
    case true:
      return <Route {...rest} component={children} />;

    default:
      return isAuthenticated ? (
        <Route {...rest} component={children} />
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
