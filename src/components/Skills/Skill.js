
import {
	SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiGithub,
	SiTailwindcss, SiExpress, SiMongodb
} from "react-icons/si";
import { FaAws ,FaRobot} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import styles from './Skill.module.css';

const skills = [
	{
		id: 1,
		icon: <SiHtml5 />,
		color: '#E34F26',
		name: "HTML"
	},
	{
		id: 2,
		icon: <SiCss3 />,
		color: '#1572B6',
		name: "CSS"
	},
	{
		id: 3,
		icon: <SiJavascript />,
		color: '#F7E01C',
		name: "JavaScript"
	},
	{
		id: 4,
		icon: <SiReact />,
		color: '#61DBFB',
		name: "React.js"
	},
	{
		id: 5,
		icon: <SiNodedotjs />,
		color: '#8CC84B',
		name: "Node.js"
	},
	{
		id: 6,
		icon: <SiGithub />,
		color: '#000',
		name: "GitHub"
	},
	{
		id: 7,
		icon: <FaRobot />,
		color: '#7952B3',
		name: "Gen AI"
	},
	{
		id: 8,
		icon: <SiTailwindcss />,
		color: '#38B2AC',
		name: "Tailwind CSS"
	},
	{
		id: 9,
		icon: <SiExpress />,
		color: '#000',
		name: "Express.js"
	},
	{
		id: 10,
		icon: <RiNextjsFill />,
		// color: '#4479A1',
		name: "Next.js"
	},
	{
		id: 11,
		icon: <SiMongodb />,
		color: '#47A248',
		name: "MongoDB"
	},
	{
		id: 12,
		icon: <FaAws />,
		color: '#F29111',
		name: "AWS"
	},
];

const Skill = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>My Skills</h1>
			<div className={styles.container}>
				{skills?.map((skill) => (
					<div key={skill.id} className={styles.box}>
						<div>
							<div style={{ color: skill?.color, fontSize: '2em' }} className={styles.icon}>
								{skill?.icon}
							</div>
							<h4 className={styles.name}>{skill.name}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skill;
