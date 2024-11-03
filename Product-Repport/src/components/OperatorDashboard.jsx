import  { useState } from 'react';
import "./operator.scss";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [reports, setReports] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      product,
      quantity,
      date
    };
    setReports([...reports, newReport]);
    setProduct('');
    setQuantity('');
    setDate('');
  };

  const logout = () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  return (
    <div>
      <header>
        <h1>Production Report Dashboard</h1>
        <Link to="/">
        <button onClick={logout}>Logout</button>
        </Link>
      </header>

      <main>
        <section className="form-section">
          <h2>Input Production Data</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input
              type="text"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
            />
            
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />

            <label htmlFor="date">Production Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="report-section">
          <h2>Production Reports</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.product}</td>
                  <td>{report.quantity}</td>
                  <td>{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
