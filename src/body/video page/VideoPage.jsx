import VideoCard from "../videos/VideoCard"
import CommentsBox from "./CommentsBox"
import DescriptionBox from "./DescriptionBox"
import VideoBox from "./VideoBox"
import styles from "./videoPage.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import VideoList from "../videos/VideoList"


function VideoPage(){

    const { videoID } = useParams();

    const req = {id: videoID};

    const [list, setList] = useState([]);
    const [videoData, setVideoData] = useState({})

    useEffect(()=>{
        fetch("https://screen-hub-server.vercel.app/list")
            .then(res=> res.json())
            .then((data)=>{
                setList(data);
        })

        fetch("https://screen-hub-server.vercel.app/getvideoinfo",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(req)
        })
            .then(res=> res.json())
            .then((data)=>{
                setVideoData(data);
        })
    },[])

    return(
        <div className={styles.videoPage}>
            <div className={styles.container} >
                <VideoBox title={videoData.title} username={videoData.username} date={videoData.date} />
                <DescriptionBox description={videoData.description} />
                <CommentsBox/>
            </div>

            <div className={styles.sideList} >
                {list.map((e)=>{
                    return <VideoCard key={crypto.randomUUID()} title={e.title} username={e.username} videoID={e.videoID} coverID={e.coverID}  />
                })}
            </div>

        </div>
    )
};

export default VideoPage