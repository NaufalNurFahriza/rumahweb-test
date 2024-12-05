import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Validasi input wajib isi
    if (!username || !password) {
      setMessage("Username dan password harus diisi.");
      return;
    }

    // Kirim data login ke API
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { username, password }) // Contoh API
      .then((response) => {
        const token = "dummyToken"; // Gunakan response dari API nyata untuk mendapatkan token
        localStorage.setItem("token", token);
        setMessage("Login Berhasil!");
      })
      .catch(() => {
        setMessage("Login Gagal. Periksa username atau password Anda.");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
