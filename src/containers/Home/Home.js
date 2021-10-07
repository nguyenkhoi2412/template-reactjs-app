import "./Home.less";
import logo from "@assets/images/logo.svg";

const Home = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to my world!!!
          </p>
        </header>
      </div>
    </>
  );
};

export default Home;
