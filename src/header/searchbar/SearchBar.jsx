import styles from "./searchbar.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react"

function SearchBar({show}){

    const [searchValue, setSearchValue] = useState(null)



    function getInput(e){
        e.preventDefault()

        const search = e.target.value;

        setSearchValue(search)
    }

    const searchJson = {
        param : searchValue
    }

    function sendSearch(){
        fetch("https://screenhub.com", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(searchJson)
        } )

    }

    return(
        <form className={` ${styles.container} ${show ? styles.show : ""}`} >
            <input className={styles.input} type="text" placeholder="search" onChange={getInput}/>
    
            <AiOutlineSearch className={styles.sendSearch} onClick={sendSearch} />
        </form>
    )
};

export default SearchBar