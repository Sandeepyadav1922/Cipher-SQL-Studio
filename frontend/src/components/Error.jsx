import { Link } from "react-router-dom";
import "./Error.css";

function ShowError() {
    return (
        <>
        <div className="error">
            <div className="error-content">Page Not Found</div>
            </div>
        <Link to={"/assignments"}>
        <button className="error-btn">Go To Home Page</button>
        </Link>
        </>
    );
}

export default ShowError;