import { useNavigate } from "react-router"
import { loginStatus } from "../../index";
import Logo from "../../header/logo/Logo"
import styles from "./loginSigninPage.module.css"


function SigninPage(){

    const navigate = useNavigate();

    function sendSignIn(e){
        e.preventDefault()

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const info = {
            email: e.target.email.value,
            username: e.target.username.value,
            name: e.target.name.value,
            surname: e.target.surname.value,
            password: e.target.password.value
        }
        
        if (info.username === "" || info.name === "" || info.surname === "" || info.email === "" || info.password === ""){
            alert("Debes rellenar todos los campos");
            return
        }

        if(info.email !== "" && !regexEmail.test(info.email)){
            alert("Debes escribir una direccion de correo valida");
            return
        }

        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem("SH_ACCESS_TOKEN", data.token);
            navigate("/");
            loginStatus.setState()
        })

    }

    return(
        <div className={styles.signinPage} >

            <div className={styles.containerSignin} >
                <div className={styles.presentation} >
                    <div className={styles.signin} >Sign In</div>
                    <Logo className={styles.logo} />
                </div>

                <form className={styles.form} onSubmit={sendSignIn} >

                    <input className={styles.input} type="email" placeholder="Email" name="email" />
                    <input className={styles.input} type="text" placeholder="User Name" name="username" />
                    <input className={styles.input} type="text" placeholder="Name" name="name" />
                    <input className={styles.input} type="text" placeholder="Surname" name="surname" />
                    <input className={styles.input} type="password" placeholder="Password" name="password" />
                    <input type="submit" name="signin" value="Sign In" className={styles.submit} />

                </form>

            </div>
            
        </div>
    )
};

export default SigninPage