import { useNavigate } from "react-router"
import styles from "./loginSignin.module.css"

function Signin(){

    const navigate = useNavigate()

    const toSignin = ()=>{navigate("/signin")}

    return(
        <div className={styles.signin} onClick={toSignin} >
            Sign In
        </div>
    )
};

export default Signin