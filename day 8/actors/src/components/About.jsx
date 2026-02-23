import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <p>B.Tech CSE Final Year Student</p>

      <div className={styles.skills}>
        <p>Skills: HTML, CSS, JavaScript, React, Python</p>
      </div>
    </section>
  );
}

export default About;