import "./About.less";
import logo from "@assets/images/logo.svg";

const About = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>About us!!!</p>
        </header>
      </div>
    </>
  );
};

export default About;
