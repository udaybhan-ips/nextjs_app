import Image from "next/image";
import styles from "./about.module.css"
export default function About() {
  return (

    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We belive in good ideas flexibility and precission.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}/>
      </div>
    </div>


  );
}
