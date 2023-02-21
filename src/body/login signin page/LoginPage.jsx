import styles from "./loginSigninPage.module.css"
import Logo from "../../header/logo/Logo"
import { useNavigate } from "react-router"
import { loginStatus, userData } from "../../index";

function LoginPage(){

    const navigate = useNavigate();

    function sendLogin(e){
        e.preventDefault()

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const info = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        
        if (info.email === "" || info.password === ""){
            alert("Debes rellenar todos los campos");
            return
        }

        if(info.email !== "" && !regexEmail.test(info.email)){
            alert("Debes escribir una direccion de correo valida");
            return
        }

        fetch("https://screen-hub-server.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data =>{
            localStorage.setItem("SH_ACCESS_TOKEN", data.userData.token);
            navigate("/");
            loginStatus.setState(data.status)
            userData.state = data.userData;

        })
    }

    return(
        <div className={styles.signinPage} >

            <div className={styles.containerLogin} >
                <div className={styles.presentation} >
                    <div className={styles.signin} >Log In</div>
                    <Logo className={styles.logo} />
                </div>

                <form className={styles.form} onSubmit={sendLogin} >
                    
                    <input className={styles.input} type="email" placeholder="Email" name="email" />
                    <input className={styles.input} type="password" placeholder="Password" name="password" />
                    <input type="submit" name="signin" value="Log In" className={styles.submit} />

                </form>

            </div>
            
        </div>
    )
};

export default LoginPage