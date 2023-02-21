import { useEffect, useState } from "react";
import styles from "./video.module.css";
import VideoCard from "./VideoCard";


function VideoList(){

    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("https://screen-hub-server.vercel.app/list")
            .then(res=> res.json())
            .then((data)=>{
                setList(data);
        })
    },[])

    return(
        <div className={styles.videoList} >
            <div className={styles.videos} >
                {list.map((e)=>{
                    return <VideoCard key={crypto.randomUUID()} title={e.title} username={e.username} videoID={e.videoID} coverID={e.coverID}  />
                })}
            </div>
        </div>
    )
};

export default VideoList;