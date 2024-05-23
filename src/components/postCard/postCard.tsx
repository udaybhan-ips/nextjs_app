import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

export default function PostCard() {
    return (
     <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="" fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bootom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <Link href="/blog/post" className={styles.link}>READ MORE</Link>
        </div>
     </div>
    );
  }
  