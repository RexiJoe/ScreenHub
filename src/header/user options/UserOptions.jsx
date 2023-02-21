import {FiUpload, FiBell, FiUser} from "react-icons/fi"
import { useNavigate } from "react-router"
import styles from "./userOptions.module.css"

function UserOptions(){
    const navigate = useNavigate()

    const toUserPage = ()=>{navigate("/user")}
    const toUploadPage = ()=>{navigate("/upload")}

    return(
        <div className={styles.container} >
            <FiUpload className={styles.upload} onClick={toUploadPage} />
            <FiBell className={styles.notification} />
            <FiUser className={styles.user} onClick={toUserPage} />
        </div>
    )
};

export default UserOptions