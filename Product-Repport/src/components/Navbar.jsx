// src/components/Navbar.jsx

const Navbar = () => {
  return (
    <div className="jadwal-produksi">
      <header className="header">
        <h1 className="logo">Estu</h1>
        <nav className="nav">
          <a href="/admin" className="nav-link">Dashboard</a>
          <a href="/jadwalproduksi" className="nav-link active">Jadwal Produksi</a>
          <a href="/laporan" className="nav-link">Laporan Hasil Produksi</a>
          <a href="/" className="nav-link">
          <button className="logout-button">Keluar</button>
          </a>
        </nav>
      </header>
  
    </div>

  );
};

export default Navbar;
