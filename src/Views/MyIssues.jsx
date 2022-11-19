import { useState, useEffect } from "react";
import axios from "axios";
import IssueDetails from "./IssueDetail";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);

  console.log(issues);

  useEffect(() => {
    const getIssues = async () => {
      const res = await axios.get("https://localhost:7067/api/Issues");

      setIssues(res.data);
    };

    getIssues();
  }, []);

  return (
    <div className="issues">
      {issues.map((issue) => (
        <IssueDetails key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default MyIssues;
