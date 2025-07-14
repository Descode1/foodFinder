import { JSX } from "react"
import styles from "./index.module.css"
import Logo from "./logo"

const Header = (): JSX.Element =>{
    return(
        <header className={styles.root}>
            <div className="layout-grid">
                <Logo/>
            </div>
        </header>
    );
};
 export default Header;
