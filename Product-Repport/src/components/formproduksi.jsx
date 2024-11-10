import { useState } from "react";
import "./formproduksi.scss";
import Navbar from "./Navbar";

const FormProduksi = () => {
  const [tahapanProduksi, setTahapanProduksi] = useState("");

  const handleDropdownChange = (e) => {
    setTahapanProduksi(e.target.value);
  };

  return (
    <>
    <Navbar/>
    <div className="form-produksi">
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
    </>
  );
};

export default FormProduksi;
