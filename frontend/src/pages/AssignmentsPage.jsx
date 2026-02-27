import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AssignmentsPage.css";


function AssignmentsPage() {
    let [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/assignments")
        .then((res) => {
            setAssignments(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="assignments-container">
            <div className="assignments-body">
                <div className="main-container">
                    <div>Assignment/Practical/Execute SQL Queries</div>
                </div>
                <div className="assignments-header">
                    <div className="header-num">NO.</div>
                    <div className="header-title">Assignment Title</div>
                    <div className="header-difficulty">Assignment Difficulty</div>
                </div>
                {assignments.map((assignment, index) => (
                <Link className="links" to={`/assignments/${assignment._id}`}>
                <div className="assignments">
                <div className="assignment-num">{index + 1}.</div>
                <div className="assignment-title">{assignment.title}</div>
                <div className="assignment-difficulty">{assignment.difficulty}</div>
                </div>
                </Link>
                
            ))}
            </div>
        </div>
    );
}

export default AssignmentsPage;