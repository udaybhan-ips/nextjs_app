import { Links } from "./links/Links";
import style from "./navbar.module.css"

export default function Navbar() {
    return (
     <div className={style.container}>
        <div className={style.logo}>Logo</div>
        <div>
            <Links/>
        </div>
     </div>
    );
  }
  