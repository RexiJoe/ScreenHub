import styles from "./videoPage.module.css"


function DescriptionBox({description}){

    return(
        <div className={styles.descriptionBox} >
            <div className={styles.description} >Description</div>
            {description}
            <div className={styles.showMore} >show more</div>
        </div>
    )
};

export default DescriptionBox