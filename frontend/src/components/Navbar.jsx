import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="nav">
            <Link className="nav-link" to={"/assignments"}>
            Assignments
            </Link>
        </div>
    );
}

export default Navbar;