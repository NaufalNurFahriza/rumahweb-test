import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState("");

  // Fungsi untuk mengatur nilai input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validasi form dan pengiriman data
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validasi wajib isi
    if (!name || !email || !message) {
      setNotification("Semua input wajib diisi!");
      return;
    }

    // Kirim data ke API
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        setNotification("Data berhasil dikirim!");
        console.log(response.data);
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setNotification("Gagal mengirim data!");
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Form Kontak</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pesan:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Kirim</button>
      </form>
      {notification && <p>{notification}</p>}
    </div>
  );
};

export default Contact;
