import Slider from "../recomended videos/Slider";
import VideoList from "../videos/VideoList";
import styles from "./home.module.css"


function HomePage(){
    return(
        <div className={styles.home} >
            <Slider/>
            <VideoList/>
        </div>
    )
};

export default HomePage;