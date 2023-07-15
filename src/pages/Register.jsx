import { Form, Input, Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  registerFailure,
  registerSuccess,
} from "../store/auth/actions/auth.actions";
import { useDispatch } from "react-redux";
import { auth } from "../firebaseConfig";
const Register = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFailure(error.message));
      });
  };
  return (
    <div className="login-container-form">
      <h1 className="text-center">Register</h1>
      <Form
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input size="large" placeholder="Email" />
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
          <Input.Password type="password" size="large" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
