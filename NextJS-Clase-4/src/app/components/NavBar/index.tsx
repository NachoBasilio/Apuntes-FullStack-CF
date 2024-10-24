import Link from "next/link";
import styles from "./styles.module.css"

export default function Navbar () {
    return <nav className={styles.navbar} >
        <ul className={styles.list}>
            <li>
                <Link className={styles.link} href="/">Home</Link>
            </li>
            <li>
                <Link className={styles.link} href="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link className={styles.link} href="/dashboard/metrics">Metrics</Link>
            </li>
            <li>
                <Link className={styles.link} href="/blog">Blog</Link>
            </li>
        </ul>
    </nav>;
}