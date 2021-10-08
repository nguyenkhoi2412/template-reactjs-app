import React, { useEffect } from "react";
import { Route } from "react-router-dom";

const Page = ({ title, ...rest }) => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);
  return <Route {...rest} />;
};

export default Page;
