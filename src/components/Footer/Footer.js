import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>© 2024 Shrikant Jha <span className={styles.emoji}>😊</span></p>
		</footer>
	);
};

export default Footer;
