import  { useState } from 'react';
import "./login.scss";
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = () => {
    if (username === '' || password === '') {
      setErrorMessage('Nama dan password harus diisi.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="box">
          <h1>PT. ESTU KARYA UTAMA GRAFIKA</h1>
          <p>Production Report</p>
        </div>
      </div>
      <div className="right-side">
        <div className="form-container">
          <h1>Estu</h1>
          <label htmlFor="username">Nama</label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan nama operator"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword}
            </button>
          </div>
          <Link to="/admin">
          <button className="login-button" onClick={login}>Masuk</button>
          {errorMessage && <p id="error-message">{errorMessage}</p>}
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
