import React from "react";
import styles from "../Styles/VideoCard.module.css";

const VideoCard = ({ video }) => {
  return (
    <div className={styles.card}>
      <iframe title="Fitness Video" src={video.video}></iframe>
      <h2>{video.queryHeading}</h2>
      <p>Tags: {video.tags.join(", ")}</p>
    </div>
  );
};

export default VideoCard;
