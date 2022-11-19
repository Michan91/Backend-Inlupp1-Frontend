import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailsIssue = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getIssue = async () => {
      setLoading(true);
      const res = await axios.get("https://localhost:7067/api/Issues/" + id);
      setIssue(res.data);
      setLoading(false);
    };

    getIssue();
  }, [id]);

  return (
    <div>
      {loading && <p>loading...</p>}
      {issue && (
        <div className="product-details">
          <h5>Skapad:</h5>
          <div className="status">
            <p>{issue.created}</p>
            <div className="status2">
              <p>{issue.status.status}</p>
            </div>
          </div>
          <div className="status">
            <p>Email:{issue.customer.email}</p>
            <p>Mobilnummer:{issue.customer.phoneNumber}</p>
          </div>
          <h5>Ärende:</h5>
          <p>Titel:{issue.subject}</p>
          <p>Beskrivning:{issue.description}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsIssue;
