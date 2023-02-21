import styles from "./slider.module.css"

function ImageView({source}){

    const img = require(`./slider images/${source}`)

    return(
        <>
        <img src={img} className={styles.imageView} />

        <div className={styles.description} >
            <h1 className={styles.videoTitle} >Video Title bla bla bla y mas bla bla bla</h1>
            <div className={styles.date} >Date</div>
            <div className={styles.likes} >Likes</div>
            <div className={styles.dislikes} >Dislikes</div>
            <div className={styles.views} >Views</div>
        </div>
        </>
    )
};

export default ImageView