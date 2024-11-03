import "./jadwalproduksi.scss";

const JadwalProduksi = () => {
  const data = [
    { no: 1, tanggal: "Rabu/9/10/2024", jobNo: "240001", namaItem: "Kardus Mentos", namaMesin: "CD - 102", jumlahDruk: "9.000" },
    { no: 2, tanggal: "Kamis/10/10/2024", jobNo: "240002", namaItem: "Kardus Mentos", namaMesin: "CD - 102", jumlahDruk: "9.000" },
    { no: 3, tanggal: "Jumat/11/10/2024", jobNo: "240003", namaItem: "Kardus Mentos", namaMesin: "CD - 102", jumlahDruk: "9.000" }
  ];

  return (
    <div className="jadwal-produksi">
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
        <h2 className="title">Jadwal Produksi</h2>
        <table className="table">
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
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.tanggal}</td>
                <td>{item.jobNo}</td>
                <td>{item.namaItem}</td>
                <a href="./formproduksi"> 
                <td>{item.namaMesin}</td></a>
                <td>{item.jumlahDruk}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="ambil-job-button">Ambil Job</button>
      </div>
    </div>
  );
};

export default JadwalProduksi;
