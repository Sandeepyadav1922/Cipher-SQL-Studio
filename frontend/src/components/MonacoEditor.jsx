import Editor from "@monaco-editor/react";
import axios from "axios";
import { useState } from "react";
import "./MonacoEditor.css";

function SqlEditor({question}) {
    let [query, setQuery] = useState();
    let [results, setResults] = useState([])
    let [studentQuery, setStudentQuery] = useState();
    let [resultError, setResultError] = useState();
    let [hint, setHint] = useState({});

    let handleSubmit = async () => {
        try {
        let res = await axios.post("http://localhost:5000/sql", {query});
        setResults(res.data);
        setResultError("")
        setHint({})
        setStudentQuery("");
        } catch(err) {
            setResults([]);
            setResultError("You have Entered Wrong Query");
            setStudentQuery(err.response.data.message);
        }
    }

    let getHint = async () => {
        try {
            let res =  await axios.post("http://localhost:5000/hint", {userQuery: studentQuery, question: question})
            setHint(res.data.message)
        } catch(err) {
            setHint(err.response.data.message)
            console.log(err.response);
        }
    }

    return (
        <div>
            <div className="result-table">
            <table>
                {results.length >= 1 ? (
                <tr className="result-header">
                        <th>name</th>
                        <th>email</th>
                        <th>salary</th>
                        <th>department</th>
                    </tr>
                    ): (
                        <div className="query-error"><span style={{color: "red"}}>{resultError}</span></div>
                    )}
        {results.map((result) => (
                    <tr className="result-data">
                        <td>{result.name}</td>
                        <td>{result.email}</td>
                        <td>{result.salary}</td>
                        <td>{result.department}</td>
                    </tr>
        ))}
        </table>
        </div>
        {hint.length >= 1 && (
        <div className="result-hint">
            <div>
                <div className="hint">Hint: <span style={{color: "green"}}>{hint}</span></div>
        </div>
        </div>
        )}
        <div className="editor-container">
        <Editor
        height={"95%"}
        width={"95%"}
        defaultLanguage="sql"
        onChange={(e) => setQuery(e)}
        theme="vs-dark"
        />
        </div>
        <div>
        <button type="submit" onClick={handleSubmit}>Execute Query</button>
        {resultError && (
        <button type="submit" onClick={getHint}>Get Hint</button>
        )}
        </div>
        </div>
    );
}

export default SqlEditor;