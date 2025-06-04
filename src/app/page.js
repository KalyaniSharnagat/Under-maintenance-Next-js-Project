// import Image from "next/image";
// import styles from "./page.module.css";
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";



export default function Home() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.content}>
            <p className={styles.title}>
              www.<span className={styles.domainText}>{domain}</span> <br />Under Maintenance.
            </p>
            <p className={styles.description}>
              We apologize for any inconvenience caused, but our website is currently undergoing scheduled
              maintenance to enhance your browsing experience.
            </p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.email}>
              <strong>Email</strong> <br />
              <a href="mailto:hello@rsinfotechsys.com">
                hello@rsinfotechsys.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <Image
            src="/image copy 2.png"
            alt="under maintenance"
            draggable={false}
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          © 2023 All Rights Reserved by <span className={styles.domainText}>{domain}</span> &nbsp; Designed & Developed By
          <a href="https://rsinfotechsys.com"> Right Serve Infotech System Pvt. Ltd.</a>
        </p>
      </div>
    </section>
  );
}