import styles from "./logo.module.css"
import {FaDesktop} from "react-icons/fa"
import { useNavigate } from "react-router"

function Logo(){

    const navigate = useNavigate()

    const toHome = ()=>{navigate("/")}

    return(
        <div className={styles.container} onClick={toHome} >
            <h1 className={styles.title1}>Screen</h1>
            <h1 className={styles.title2}>Hub</h1>
            <FaDesktop className={styles.FaDesktop} />
        </div>
    )
};

export default Logo