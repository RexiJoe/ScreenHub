import { useEffect, useState } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useNavigate } from "react-router";
import styles from "./video.module.css";


function VideoCard({title, username, coverID, videoID}){

    const navigate = useNavigate();

    const toVideoPage = ()=>{ 
        navigate(`/video/${videoID}`)
        navigate(0)
    }

    return(
        <div className={styles.videoCardContainer} onClick={toVideoPage} >
            <div className={styles.videoCardPreview} >
                <img src={`https://screen-hub-server.vercel.app/cover/${coverID}`} width={250} height={140} />
                <div className={styles.insideInfo} >

                    <div className={styles.name} >{username}</div>
                    <div className={styles.time} >10:00</div>

                </div>
            </div>

            <div className={styles.infoContainer} >
                <div className={styles.userLogoContainer} >
                    <div className={styles.logo}>

                    </div>
                </div>

                <div className={styles.textContainer} >

                    <div className={styles.title} > {title} </div>
                    <div className={styles.date} >2 months ago</div>
                    <div className={styles.otherContainer} >

                        <div>1.000.000 views</div>
                        <div>2000 <FiThumbsUp/></div>
                        <div>100 <FiThumbsDown/></div>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default VideoCard;