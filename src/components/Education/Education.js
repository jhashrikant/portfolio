import styles from "./Education.module.css"

const Education = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>Education</h1>
			<div className={styles.container}>
				<div className={styles.box}>
					<h2 className={styles.name}>Bachelor of Engineering (BE)</h2>
					<p className={styles.university}>Sinhgad Institute of Technology </p>
					<p className={styles.duration}>2018 - 2021</p>
				</div>
				<div className={styles.box}>
					<h2 className={styles.name}>Diploma in Engineering</h2>
					<p className={styles.university}>Mucchala Polytechnic</p>
					<p className={styles.duration}>2015 - 2018</p>
				</div>
				{/* <div className={styles.box}>
					<h2 className={styles.name}>SSC</h2>
					<p className={styles.university}>Bhikamchand Khandelwal Vidyalaya</p>
					<p className={styles.duration}>2014 - 2016</p>
				</div> */}
			</div>
		</div>
	);
};
export default Education;