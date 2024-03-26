import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
    return (<div>
        <Header />
        <Outlet />
        <Footer />
    </div>);
}

export default Root;