import styles from "./uploadPage.module.css"
import {FiUpload} from "react-icons/fi"
import { useState } from "react";



function UploadPage(){

    const [cover, setCover] = useState("")
    const [video, setVideo] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [progress, setProgress] = useState(0)

    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function getCover(e){
        const elementCover = e.target;
        const coverFile = elementCover.files[0]
        const reader = new FileReader();

        reader.readAsDataURL(coverFile);
        reader.onloadend = ()=>{
            setCover(reader.result.toString())
        }
    };

    function getVideo(e){

        let videoName = e.target.value
        videoName = videoName.replace(/^.*\\/,"")
        setTitle(videoName)
        
        const videoFile = e.target.files[0]
        const reader = new FileReader();

        reader.readAsDataURL(videoFile);
        reader.onloadend = ()=>{
            setVideo(reader.result)
        }
        
    };

    async function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target);
        //formData.delete("cover");
        formData.append("token", localStorage.getItem("SH_ACCESS_TOKEN"))

        let ajax = new XMLHttpRequest();
        ajax.upload.addEventListener("progress", (e)=>{
            let percentage = (e.loaded / e.total) * 100;
            setProgress(Math.round(percentage))
        })

        ajax.open("POST", "http://localhost:3000/upload")
        ajax.send(formData)
    }

    return(
        <div className={styles.uploadPage} >

            <form className={styles.container} onSubmit={handleSubmit}   >
                <div className={styles.preview} >
                    {video == "" ? "" : <video className={styles.video} src={video} controls />}
                    <div className={styles.uploadButtonContainer} >
                        upload video
                        <input className={styles.inputVideo}  id="inputVideo" type="file" name="video" onChange={getVideo} required />
                        <label htmlFor="inputVideo">
                            <FiUpload className={styles.videoUploadIcon} />
                        </label>
                    </div> 
                </div>

                <progress className={styles.progressBar} value={progress} max="100" ></progress>

                <input className={styles.title} type="text" name="title" placeholder="Upload you video" required value={title} onChange={handleTitle} />

                <textarea className={styles.description} type="text" name="description" placeholder="Write a description" required onChange={handleDescription} />

                <div className={styles.coverContainer} >
                    {cover == "" ? "" : <img className={styles.cover} src={cover} />}
                    <input type="file" name="cover" className={styles.inputCover} alt="preview" id="inputCover" onChange={getCover} required />
                    <label htmlFor="inputCover" className={styles.labelCover} >
                        upload cover
                        <FiUpload className={styles.uploadCoverIcon} />
                    </label>

                </div>

                <input type="submit" value="Send" className={styles.submit} />

            </form>

        </div>
    )
};

export default UploadPage