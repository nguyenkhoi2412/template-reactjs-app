import "./Home.less";
import logo from "@assets/images/logo.svg";
import { Space, Button } from "antd";
import { hooksInstance } from "@utils/helpers";
import { Helpers } from "@utils/helpers";

const Home = () => {
  const router = hooksInstance.useRouter();
  const device = Helpers.detectEnvironment();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to HOME page.</p>
          <Space>
            <Button
              type="secondary"
              htmlType="reset"
              className="form-button"
              onClick={() => router.push("/home")}
            >
              Go to Home
            </Button>
            <Button
              type="secondary"
              htmlType="reset"
              className="form-button"
              onClick={() => router.push("/about")}
            >
              Go to About
            </Button>
          </Space>
          <ul style={{ marginTop: 24 }}>
            <li>{"Screen: " + device.screen}</li>
            <li>
              {"Browser: " + device.browser + " " + device.browserVersion}
            </li>
            <li>{"OS: " + device.os + " " + device.osVersion}</li>
            <li>{"Run on mobile: " + device.mobile}</li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Home;
