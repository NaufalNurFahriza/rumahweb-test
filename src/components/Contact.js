import React, { useState } from "react"; 
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [notification, setNotification] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setNotification("Semua input wajib diisi!");
            return;
        }

        axios
            .post("https://jsonplaceholder.typicode.com/posts", formData)
            .then((response) => {
                setNotification("Data berhasil dikirim!");
                console.log(response.data);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                setNotification("Gagal mengirim data!");
                console.error(error);
            });
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.header}>2. Form input dan Pengiriman Data ke API</h3>
            <h4 style={styles.subHeader}>Form Kontak</h4>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Nama:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Pesan:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.submitButton}>Kirim</button>
            </form>
            {notification && (
                <p style={notification.includes("berhasil") ? styles.successMessage : styles.errorMessage}>
                    {notification}
                </p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    header: {
        color: "#333",
        textAlign: "center",
        marginBottom: "15px",
    },
    subHeader: {
        color: "#555",
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
    },
    label: {
        fontSize: "16px",
        color: "#333",
        marginBottom: "8px",
    },
    input: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        transition: "border-color 0.3s",
    },
    textarea: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        minHeight: "120px",
        transition: "border-color 0.3s",
    },
    submitButton: {
        padding: "12px 20px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s",
    },
    successMessage: {
        color: "green",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "15px",
    },
    errorMessage: {
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "15px",
    },
};

export default Contact;
