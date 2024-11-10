import { useState } from 'react';
import Navbar from "./Navbar.jsx";
import "./admin.scss";

const AdminDashboard = () => {
  const [jobData, setJobData] = useState({
    tanggal: '',
    jobNumber: '',
    namaItem: '',
    namaMesin: '',
    jumlahDruk: ''
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleAddJob = () => {
    setTableData([...tableData, { ...jobData, no: tableData.length + 1 }]);
    setJobData({
      tanggal: '',
      jobNumber: '',
      namaItem: '',
      namaMesin: '',
      jumlahDruk: ''
    });
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>

        <div className="job-input-section">
          <h3>Job Input</h3>
          <input
            type="text"
            name="tanggal"
            placeholder="Tanggal (e.g., Rabu/9/10/2024)"
            value={jobData.tanggal}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="jobNumber"
            placeholder="No. JOB"
            value={jobData.jobNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="namaItem"
            placeholder="Nama Item"
            value={jobData.namaItem}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="namaMesin"
            placeholder="Nama Mesin (e.g., CD - 102)"
            value={jobData.namaMesin}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="jumlahDruk"
            placeholder="Jumlah Druk (e.g., 9000)"
            value={jobData.jumlahDruk}
            onChange={handleInputChange}
          />
          <button onClick={handleAddJob}>Add Job</button>
        </div>

        <div className="table-section">
          <h3>Job Table</h3>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>No. JOB</th>
                <th>Nama Item</th>
                <th>Nama Mesin</th>
                <th>Jumlah Druk</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.no}</td>
                  <td>{data.tanggal}</td>
                  <td>{data.jobNumber}</td>
                  <td>{data.namaItem}</td>
                  <td style={{ color: 'purple', fontWeight: 'bold' }}>{data.namaMesin}</td>
                  <td>{data.jumlahDruk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
