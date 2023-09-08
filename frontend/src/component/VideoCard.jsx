import React from "react";
import styles from "../Styles/VideoCard.module.css";

const VideoCard = ({ video }) => {
  return (
    <div className={styles.card}>
     <video title="Fitness Video" src={video.video} controls={true} autoPlay={false}></video>
      <h2>{video.queryHeading}</h2>
      <p>Tags: {video.tags.join(", ")}</p>
    </div>
  );
};

export default VideoCard;
