import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.error("Error fetching posts.");
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>3. Paginasi Data</h3>
      <h4 style={styles.subHeader}>Daftar Artikel</h4>
      <ul style={styles.postList}>
        {currentPosts.map((post) => (
          <li key={post.id} style={styles.postItem}>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postBody}>{post.body}</p>
          </li>
        ))}
      </ul>
      <div style={styles.pagination}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={styles.paginationButton}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          style={styles.paginationButton}
        >
          Next
        </button>
      </div>
      <p style={styles.pageInfo}>
        Halaman {currentPage} dari {Math.ceil(posts.length / postsPerPage)}
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f4f4f4",
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
  postList: {
    listStyleType: "none",
    padding: "0",
    marginTop: "20px",
  },
  postItem: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  postTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#333",
  },
  postBody: {
    fontSize: "16px",
    color: "#555",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  paginationButton: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 10px",
    transition: "background-color 0.2s, transform 0.2s",
  },
  paginationButtonDisabled: {
    backgroundColor: "#c0c0c0",
    cursor: "not-allowed",
  },
  pageInfo: {
    textAlign: "center",
    marginTop: "20px",
    color: "#555",
    fontSize: "16px",
  },
};

export default Pagination;
