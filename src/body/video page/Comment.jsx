import styles from "./videoPage.module.css"


function Comment(){
    const comm = "i like so much the video bro, i'll give you a great like the video  much the video bro, i'll give y much the video bro, i'll give you a great like the video bro, i'll give y much the video bro, i'll give you a great like the video bro, i'll give y much the video bro, i'll give you a great like the video bro, i'll give y much the video bro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give ybro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give you a great like the video bro, i'll give you a great like the video br the video bro, i'll give you a great like"
    return(
        <div className={styles.comment} >
            <div className={styles.commentImg} > <img src="" /> </div>
            <div className={styles.commentContainer} >
                <div className={styles.commentName} > Joseph Morningstar </div>
                <div className={styles.commentText} >
                    {comm}
                    <div className={styles.commentMore} >show all</div>
                </div>
            </div>
            
        </div>
    )
};

export default Comment