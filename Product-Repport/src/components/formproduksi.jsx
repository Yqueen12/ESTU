import { useState } from "react";
import "./formproduksi.scss";

const FormProduksi = () => {
  const [tahapanProduksi, setTahapanProduksi] = useState("");

  const handleDropdownChange = (e) => {
    setTahapanProduksi(e.target.value);
  };

  return (
    <div className="form-produksi">
      <header className="header">
        <h1 className="logo">Estu</h1>
        <nav className="nav">
          <a href="#dashboard" className="nav-link">Dashboard</a>
          <a href="#jadwal-produksi" className="nav-link active">Jadwal Produksi</a>
          <a href="#laporan-hasil-produksi" className="nav-link">Laporan Hasil Produksi</a>
          <button className="logout-button">Keluar</button>
        </nav>
      </header>

      <div className="content">
        <div className="form">
          <div className="left-section">
            <div className="form-group">
              <label>No Job</label>
              <input type="text" value="240001" readOnly />
            </div>
            <div className="form-group">
              <label>Nama Item</label>
              <input type="text" value="Kardus Mentos" readOnly />
            </div>
            <div className="form-group">
              <label>Kode Item</label>
              <input type="text" value="MNTS_13324" readOnly />
            </div>
            <div className="form-group">
              <label>Jumlah Druk</label>
              <input type="text" value="9.000" readOnly />
            </div>
          </div>
          <div className="right-section">
            <div className="form-group">
              <label>Tahapan Produksi</label>
              <select value={tahapanProduksi} onChange={handleDropdownChange}>
                <option value="">Pilih Tahapan Produksi</option>
                <option value="Pond">Pond</option>
                <option value="Cetak">Cetak</option>
                <option value="Lem">Lem</option>
              </select>
            </div>
          </div>
        </div>
        <button className="ambil-job-button">Ambil Job</button>
      </div>
    </div>
  );
};

export default FormProduksi;
