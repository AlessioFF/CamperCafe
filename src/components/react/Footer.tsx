import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <p>
        <a
          className={styles.a}
          href="https://www.freecodecamp.org"
          target="_blank"
        >
          Visit our website
        </a>
      </p>
      <p className={styles.adress}>123 Free Code Camp Drive</p>
    </footer>
  );
}
