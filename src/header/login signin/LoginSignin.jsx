import Login from "./Login";
import Signin from "./Signin";
import styles from "./loginSignin.module.css"


function LoginSignin(){
    return(
        <div className={styles.container} >
            <Login />
            <Signin />
        </div>
    )
};

export default LoginSignin