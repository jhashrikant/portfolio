import styles from "./About.module.css";
import profilepic from "../assets/IMG-0015.jpg";

const About = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.content}>
        <img src={profilepic} alt="Profile" className={styles.profilePic} />
        <div className={styles.text}>
        
          <p className={styles.description}>
            Hi, I'm <strong className={styles.highlight}>Shrikant Jha</strong>, a Frontend Developer working in <strong>Infosys</strong> specializing in creating engaging web interfaces. I focus on delivering seamless user experiences with modern web technologies like React and JavaScript.
          </p>
          <p className={styles.description}>
            My passion for tech drives me to explore both technical and creative aspects of development. Let's connect and build something amazing together!
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
