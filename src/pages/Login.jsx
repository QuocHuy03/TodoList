import { Form, Input, Checkbox, Button } from "antd";
import { signInWithPopup } from "firebase/auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { auth, provider } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess } from "../store/auth/actions/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const handleAuthGoogle = () => {
    dispatch(loginRequest());
    signInWithPopup(auth, provider).then((data) => {
      dispatch(loginSuccess(data.user));
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="login-container-form">
      <h1 className="text-center">Login</h1>
      <Form
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            size="large"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            danger
            onClick={handleAuthGoogle}
          >
            Google
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
