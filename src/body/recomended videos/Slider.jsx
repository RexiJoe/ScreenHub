import { useState } from "react";
import styles from "./slider.module.css"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import ImageView from "./ImageView";


function Slider(){

    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]

    const [element, setElement] = useState(2)

    const prevCondition = element > 0;

    function prev(){

        if(prevCondition){
            setElement(element - 1)
        }else{
            setElement(images.length - 1)
        }
    }

    const nextCondition = element < images.length - 1;

    function next(){

        if(nextCondition){
            setElement(element + 1)
        }else{
            setElement(0)
        }

    }

    // setTimeout(() => {
    //     next()
    // }, 3000);

    


    return(

        // <div className={styles.upperContainer} >
        <div className={styles.container} >

            <FiChevronLeft className={styles.arrowLeft} onClick={prev} />

            <div className={styles.element} >
                <ImageView source={images[prevCondition ? element - 1 : images.length - 1]}/>

            </div>

            <div className={styles.element} >
                <ImageView source={images[element]}/>
            </div>

            <div className={styles.element} >
                <ImageView source={images[nextCondition ? element + 1 : 0]}/>
            </div>

            <FiChevronRight className={styles.arrowRight} onClick={next} />
        </div>
        // </div>
    )
};

export default Slider;