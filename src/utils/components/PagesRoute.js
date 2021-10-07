import { Redirect, Route } from "react-router-dom";

const PagesRoute = ({ component: Component, ...rest }) => {
  React.useEffect(() => {
    document.title = rest.title;
  }, [rest.title]);

  switch (rest.public) {
    case true:
      return <Route {...rest} render={(props) => <Component {...props} />} />;

    default:
      return (
        <Route
          {...rest}
          render={(props) =>
            true ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/dashboard/login",
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      );
  }
};

export default PagesRoute;
