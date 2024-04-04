import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const login = () => {
    return alert("Will be soon implemented");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-mainBackground">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-center text-fontDark">Log in</span>
          <div className="py-3">
            <input
              className="w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="py-3">
            <input
              className="w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <Button
            onClick={login}
            className="w-full border border-transparent bg-mainBackground text-white p-2 rounded-lg mb-6 hover:bg-smallBackground"
          >
            Login
          </Button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <span className="cursor-pointer font-bold text-fontDark">
              {" "}
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
