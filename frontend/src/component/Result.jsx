import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import VideoCard from "./VideoCard";
import styles from "../Styles/VideoCard.module.css";

const API_BASE_URL =
  "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos";

const Result = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [numResults, setNumResults] = useState(10);
  const [videos, setVideos] = useState([]);

  // Function to fetch videos based on search query
  const fetchVideos = async () => {
    if (searchQuery.trim() !== "") {
      try {
        const response = await axios.get(API_BASE_URL, {
          params: { q: searchQuery, numResults },
        });
        setVideos(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setVideos([]); // Clear videos if the searchQuery is empty
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [searchQuery, numResults]);

  return (
    <div className="header">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        numResults={numResults}
        setNumResults={setNumResults}
      />
      <div className={styles.results}>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Result;
