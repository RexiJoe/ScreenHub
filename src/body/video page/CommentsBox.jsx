import Comment from "./Comment"
import styles from "./videoPage.module.css"


function CommentsBox(){
    const com = [1,2,3,4,5,6,7,8,9,0]
    return(
        <div className={styles.commentsBox} >
            <div className={styles.commentWord} >Comments</div>
            {com.map((e)=>{
                return <Comment key={e} />
            })}
            <div className={styles.moreComments} >more comments</div>
        </div>
    )
};

export default CommentsBox