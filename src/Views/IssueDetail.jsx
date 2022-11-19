import React from "react";
import { Link } from "react-router-dom";

const IssueDetail = ({ issue }) => {
  return (
    <Link to={`/issues/${issue.id}`} className="product-item">
      <div className="card">
        <h5>Skapad:</h5>
        <div className="status">
          <p>{issue.created}</p>
          <div className="status2">
            <p>{issue.status.status}</p>
          </div>
        </div>
        <div className="name">
          <p>Av:{issue.customer.firstName}</p>
          <p>{issue.customer.lastName}</p>
        </div>
        <h5>Ärende:</h5>
        <p>Titel:{issue.subject}</p>
      </div>
    </Link>
  );
};

export default IssueDetail;
