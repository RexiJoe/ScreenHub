import styles from "./videoPage.module.css"



function UserCard({username}){

    return(
        <div className={styles.userCard} >
            <div className={styles.userCardContainer} >
                <div className={styles.userCardImg} > <img src="" /> </div>
                <div className={styles.nameFollowers} >
                    <div className={styles.userCardWords} title={username} > {username} </div>
                    <div className={styles.userCardWords} title="" > 100.000 Followers </div>
                </div>
            </div>

            <div className={styles.userCardFollow} >Follow</div>

        </div>
    )
};

export default UserCard