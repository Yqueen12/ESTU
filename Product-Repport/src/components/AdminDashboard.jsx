import  { useState } from 'react';
import Navbar from './Navbar';
import "./admin.scss";

const AdminDashboard = () => {
  const [productName, setProductName] = useState('');
  const [jobs, setJobs] = useState([]);
  const [jobDescription, setJobDescription] = useState('');

  const handleAddProduct = () => {
    // Logic untuk menambah produk ke backend
    console.log(`Product Added: ${productName}`);
    setProductName('');
  };

  const handleAddJob = () => {
    const newJob = { jobDescription };
    setJobs([...jobs, newJob]);
    setJobDescription('');
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>

        <div className="product-section">
          <h3>Add New Product</h3>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>

        <div className="job-section">
          <h3>Job Input</h3>
          <input
            type="text"
            placeholder="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <button onClick={handleAddJob}>Add Job</button>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>{job.jobDescription}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
