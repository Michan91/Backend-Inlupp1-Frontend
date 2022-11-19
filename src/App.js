import "./App.css";
import CustomerForm from "./components/CustomerForm";
import IssueForm from "./components/IssueForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyIssues from "./Views/MyIssues";
import IssueDetail from "./Views/IssueDetail";
import DetailsIssue from "./Views/DetailsIssue";
// import StatusForm from './components/StatusForm';
// import CommentForm from './components/CommentForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<IssueForm />} />
          <Route path="/issues" element={<MyIssues />} />
          <Route path="/issues/:id" element={<DetailsIssue />} />
          <Route path="/addcustomer" element={<CustomerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
