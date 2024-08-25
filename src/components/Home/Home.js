import React from 'react';
import styles from './Home.module.css'; // Import the CSS module
import profilepic from "../assets/IMG-0015.jpg";
import TypingText from '../TypingText/TypingText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.intro}>
					<div className={styles.textSection}>
						<h3 className={styles.greeting}>Hello, I’m</h3>
						<h2 className={styles.name}>Shrikant Jha</h2>
						<p className={styles.description}>
							I am a passionate Frontend Developer with a keen interest in creating interactive web applications.

						</p>
						<TypingText />
					</div>
					<div className={styles.buttonContainer}>
						<a href="/shrikantresume.pdf" download className={styles.btn}>
							Download Resume <FontAwesomeIcon icon={faDownload} style={{ color: '#7562e0' }} />
						</a>
					</div>
				</div>
				<div className={styles.imageSection}>
					<div className={styles.imageContainer}>
						<img src={profilepic} alt="Profile" className={styles.image} /> {/* Replace with your image source */}
					</div>
				</div>
			</div>
			{/* <div className={styles.hidebar}></div> */}
		</>
	);
};

export default Home;
