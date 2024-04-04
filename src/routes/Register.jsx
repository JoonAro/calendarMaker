
import { Button } from "react-bootstrap";
 
const Register = () => {

    const register = ()=> {
        return alert("Will be soon implemented");
    }

  return (
<div className="flex items-center justify-center min-h-screen bg-mainBackground">
<div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
<div className="flex flex-col justify-center p-8 md:p-14">
<span className="mb-3 text-4xl font-bold text-center text-fontDark">Sign up</span>
<div className="py-3">
<input
className="w-full md:w-64 p-2 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
type="text"
placeholder="Enter full name"
 />
</div>
<div className="py-3">
<input
className=" w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
type="text"
placeholder="Enter email"
 />
</div>
<div className="py-3">
<input
className="w-full p-2 md:w-64 bg-whiteReplacement border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
type="password"
id="password"
placeholder="Enter password"/>
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