import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    // Fetch data dari API berdasarkan halaman
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  // Hitung indeks awal dan akhir
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>Daftar Artikel</h2>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
      >
        Next
      </button>
      <p>Halaman {currentPage} dari {Math.ceil(posts.length / postsPerPage)}</p>
    </div>
  );
};

export default Pagination;
