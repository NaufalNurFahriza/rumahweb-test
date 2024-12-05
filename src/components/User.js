import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal mengambil data pengguna.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>1. Pengambilan Data API dan Menampilkan dalam Komponen</h3>
      <h4 style={styles.subHeader}>Daftar Nama Pengguna</h4>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  header: {
    color: "#333",
    textAlign: "center",
  
    marginBottom: "10px",
  },
  subHeader: {
    color: "#555",
    textAlign: "center",

    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    marginTop: "20px",
  },
  listItem: {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    color: "#333",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  listItemHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    color: "#007bff",
  },
  error: {
    textAlign: "center",
    fontSize: "20px",
    color: "#e74c3c",
  },
};

export default User;
