import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx'
import AdminDashboard from './components/AdminDashboard.jsx';
import OperatorDashboard from './components/OperatorDashboard.jsx';
import JadwalProduksi from './components/jadwalproduksi.jsx';
import FormProduksi from './components/formproduksi.jsx';



function App() {
  console.log('App component is rendering');
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/operator" element={<OperatorDashboard />} />
        <Route path="/jadwalproduksi" element={<JadwalProduksi/>} />
        <Route path="/formproduksi" element={<FormProduksi/>} />
      </Routes>
    </Router>
  );
}

export default App;
