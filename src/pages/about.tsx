import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

const SecondPage = () => (
  <div>
    <Header headerText="About" />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default SecondPage;
