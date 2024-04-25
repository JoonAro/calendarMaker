//import About from "./footercomponent/Contact"
//import Licensing from "./footercomponent/Licensing"
//import PrivacyPolicy from "./footercomponent/PrivacyPolicy"
//import Contact from "./footercomponent/Contact"

const Footer = () =>

  <footer className="bg-accentColor rounded-lg  ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
          <li>
            <a href="About" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="Privacy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="Licensing" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="Contact" className="hover:underline me-4 md:me-6">Contact</a>
          </li>
          <li>
            <a href="Cookies" className="hover:underline">cookies</a>
          </li>
        </ul>
      </div>

    </div>
  </footer>

export default Footer