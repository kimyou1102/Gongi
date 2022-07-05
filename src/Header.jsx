import styles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <header>
            <h1>gongi</h1>
            <div className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                </div>
            </div>
        </header>
    )
}

export default Header;