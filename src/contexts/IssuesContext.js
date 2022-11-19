import { createContext, useState } from "react";
import axios from "axios";

export const IssuesContext = createContext();

export const IssuesContextProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);

  const getIssues = async () => {
    try {
      const res = await axios.get("https://localhost:7067/api/Issues");
      setIssues(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSingleIssue = async (_id) => {
    try {
      const res = await axios.get(`https://localhost:7067/api/Issues` + _id);
      setIssue(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <IssuesContext.Provider
      value={{ issues, getIssues, setIssues, getSingleIssue, issue, setIssues }}
    >
      {children}
    </IssuesContext.Provider>
  );
};
