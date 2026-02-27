import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowError from "../components/Error";
import SqlEditor from "../components/MonacoEditor";
import "./QueryPage.css";

function QueryPage() {
    let API = import.meta.env.VITE_API_URL;
    let { id } = useParams();
    let [axiosError, setAxiosError] = useState({});
    let [assignment, setAssignment] = useState({});

    useEffect(() => {
            axios.get(`${API}/assignments/${id}`)
            .then((res) => {
                setAxiosError({})
                setAssignment(res.data);
            })
            .catch((err) => {
                setAxiosError(err.response.data.message);
                console.log(err.response);
                console.log(err.response);
            });
        }, [])

        console.log(axiosError.length)

    return (
        <div>
            {axiosError.length == undefined ? (
            <>
            <div  className="table-container">
            <h1>Table Schema</h1>
            <table>
                <tr className="table-header">
                    <th>Id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>salary</th>
                    <th>department</th>
                </tr>
                <tr className="table-data">
                    <td>INTEGER</td>
                    <td>VARCHAR</td>
                    <td>VARCHAR</td>
                    <td>INTEGER</td>
                    <td>VARCHAR</td>
                </tr>
            </table>
            </div>
            <div  className="table-container">
            <h1>Sample Data</h1>
            <div style={{fontSize: "20px"}}>Table employees</div>
            <table>
                <tr className="table-header">
                    <th>Id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>salary</th>
                    <th>department</th>
                </tr>
                <tr className="table-data">
                    <td>1</td>
                    <td>Vishal</td>
                    <td>vishal@gmail.com</td>
                    <td>25000</td>
                    <td>HR</td>
                </tr>
                <tr className="table-data">
                    <td>2</td>
                    <td>Sachin</td>
                    <td>schin@gmail.com</td>
                    <td>33000</td>
                    <td>Manager</td>
                </tr>
            </table>
            </div>
            <div className="query-details">
                <div className="query-content">
                <h3>Query: <span>{assignment.question}</span></h3>
                <h3>Difficulty Level : <span>{assignment.difficulty}</span></h3>
                <h3>Query Description: <span>{assignment.description}</span></h3>
                </div>
            </div>
            <SqlEditor question={assignment.question}/>
            </>
            ): (
                <ShowError/>
            )}
        </div>
    );
}

export default QueryPage;