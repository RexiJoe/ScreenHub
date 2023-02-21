import { useEffect, useState } from "react";
import { FiPlusSquare, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useParams } from "react-router";
import UserCard from "./UserCard";
import styles from "./videoPage.module.css";


function VideoBox({title, username, date}){
    const { videoID } = useParams()

    return(
        <div className={styles.videoBox} >
            <video className={styles.videoPlayer} controls autoPlay  > <source src={`http://localhost:3000/video/${videoID}`} type="video/mp4" /> </video>

            <h1 className={styles.title} >{title}</h1>

            <div className={styles.info} >
                <UserCard username={username} />
    
                <div className={styles.viewsDateButtons} >
                    <div className={styles.viewsDate} >
                        <div className={styles.viewsDateWords} >1.000.000 <FiThumbsUp className={styles.buttonsLike} /></div>
                        <div className={styles.viewsDateWords} >{date}</div>
                    </div>

                    <div className={styles.buttonsContainer} >
                        <div className={styles.buttons} >100.000 <FiThumbsUp className={styles.buttonsLike} /></div>
                        <div className={styles.buttons} >9000 <FiThumbsDown className={styles.buttonsDislike} /></div>
                        <div className={styles.buttons} >save <FiPlusSquare className={styles.buttonsSave} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VideoBox