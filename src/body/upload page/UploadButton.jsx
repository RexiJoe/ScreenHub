import styles from "./uploadPage.module.css"
import {FiUpload} from "react-icons/fi"


function UploadButton({getVideo}){
    return(
        <div className={styles.uploadButtonContainer} >
            upload video
            <input className={styles.inputVideo} id="inputVideo" type="file" name="video" onChange={getVideo} required />
            <label htmlFor="inputVideo">
                <FiUpload className={styles.videoUploadIcon} />
            </label>
        </div>
    )
};

export default UploadButton