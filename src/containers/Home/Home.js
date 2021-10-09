import "./Home.less";
import logo from "@assets/images/logo.svg";
import { Space, Button } from "antd";
import { hooksInstance } from "@utils/helpers";

const Home = () => {
  const router = hooksInstance.useRouter();

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
        </header>
      </div>
    </>
  );
};

export default Home;
