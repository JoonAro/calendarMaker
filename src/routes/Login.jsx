import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword } from "../auth/firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const login = () => {
    loginWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        navigate('/');
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-mainBackground">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-center text-fontDark">Log in</span>
          <div className="py-3">
            <input
              className="w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-3">
            <input
              className="w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            onClick={login}
            className="w-full border border-transparent bg-mainBackground text-white p-2 rounded-lg mb-6 hover:bg-smallBackground"
          >
            Login
          </Button>
          <span className="cursor-pointer font-bold text-black"><Link to={"/register"}> Sign up here</Link></span>
        </div>
      </div>
    </div>

  );
};

export default Login;
