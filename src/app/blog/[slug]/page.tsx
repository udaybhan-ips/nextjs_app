import Image from "next/image";
import styles from "./singlePost.module.css"

export default function SinglePostPage() {
    return (
     <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.details}>

          </div>          
        </div>
     </div>
    );
  }
  