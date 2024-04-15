import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../auth/firebase";
import Avatar from "../components/Avatar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter your name");
    registerWithEmailAndPassword(name, email, password, selectedAvatar);
  };

  useEffect(() => {
    if (loading) return;
    if (user) console.log("User Info:", user);
    if (user) navigate("/register");
  }, [user, loading]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-mainBackground">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-center text-fontDark">Sign up</span>
          <Avatar avatarValue={selectedAvatar} />
          <Form.Group className="py-3">
            <Form.Select
              className="w-full p-2 md:w-64 border border-gray-300 rounded-md"
              value={selectedAvatar}
              onChange={(e) => setSelectedAvatar(e.target.value)}
            >
              <option value="">Select an avatar</option>
              <option value="avatar1">Avatar 1</option>
              <option value="avatar2">Avatar 2</option>
              <option value="avatar3">Avatar 3</option>
              <option value="avatar4">Avatar 4</option>
              <option value="avatar5">Avatar 5</option>
              <option value="avatar6">Avatar 6</option>
              <option value="avatar7">Avatar 7</option>
              <option value="avatar8">Avatar 8</option>
              <option value="avatar9">Avatar 9</option>
              <option value="avatar10">Avatar 10</option>
            </Form.Select>
          </Form.Group>
          <div className="py-3">
            <input
              className="w-full md:w-64 p-2 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="py-3">
            <input
              className=" w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-3">
            <input
              className="w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password" />
          </div>

          <Button className="w-full border border-transparent bg-mainBackground text-white p-2 rounded-lg mb-6 hover:bg-smallBackground"
            onClick={register}>Sign up</Button>
        </div>

        <div className="relative">

        </div>
      </div>
    </div>
  )
};

export default Register;