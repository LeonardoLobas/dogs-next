import Image from "next/image";
import styles from "./footer.module.css";
import React from "react";

export default async function Footer() {
    return (
        <footer className={styles.footer}>
            <Image src={"/assets/dogs-footer.svg"} alt="Dogs" width={28} height={22} />
            <p>Alguns direitos reservados.</p>
        </footer>
    );
}
