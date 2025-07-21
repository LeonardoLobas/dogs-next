import { Photo } from "@/actions/photo-get";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/components/feed/feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
    return (
        <ul className={`${styles.feed} animeLeft`}>
            {photos.map((photo) => (
                <li className={styles.photo} key={photo.id}>
                    <Link href={`/foto/${photo.title}`} scroll={false}>
                        <Image
                            src={photo.src}
                            width={1500}
                            height={1500}
                            alt={photo.title}
                            sizes="80vw"
                        />
                        <span className={styles.visualizacao}>
                            {photo.acessos}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
