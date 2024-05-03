import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () =>
  <div className="bg-accentColor w-screen">
    <ul className="flex flex-wrap items-center text-sm text-gray-500 z-20">
      <Link to="about">
        <Button variant="contained" className="text-whiteReplacement text-l">About</Button>
      </Link>
      <Link to="privacy">
        <Button variant="contained" className="text-whiteReplacement text-l">Privacy Policy</Button>
      </Link>
      <Link to="licensing">
        <Button variant="contained" className="text-whiteReplacement text-l">Licensing</Button>
      </Link>
      <Link to="cookies">
        <Button variant="contained" className="text-whiteReplacement text-l">Cookies</Button>
      </Link>
      <Link to="/premium">
        <Button variant="contained" className="text-whiteReplacement text-l">Premium</Button>
      </Link>
    </ul>
  </div >

export default Footer