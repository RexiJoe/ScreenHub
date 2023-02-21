import { useState } from "react"
import { useNavigate } from "react-router"
import styles from "./loginSignin.module.css"

function Login(){

    //const [state, setState] = useState()
    
    const navigate = useNavigate()
    
    //const toLogin = ()=>{navigate("/login")}
    const toLogin = ()=>{
        navigate("/login")
    }

    

    return(
        <div className={styles.login} onClick={toLogin} >
            Login
        </div>
    )
};

export default Login