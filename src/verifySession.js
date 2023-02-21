import { loginStatus, userData} from "./index"


export default async function VerifySession(){

    const data = {
        token: localStorage.getItem("SH_ACCESS_TOKEN")
    }
    const status = await fetch("https://screen-hub-server.vercel.app/verify/session", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then((data)=>{
        userData.state = data.userData;
        loginStatus.setState(data.status);
        return data.status
    })
    .catch(err =>{
        return false
    });

    return status;
};