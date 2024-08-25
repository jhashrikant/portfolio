import styles from "./Project.module.css";
import storeimg from '../assets/shopsavvystore.png';
import adminimg from '../assets/shopsavyadmin.png';
import spreadsheetimg from '../assets/spreadsheet.png';
const projects = [
	{
		id: 1,
		name: "Shopsavvy-Ecommerce store",
		description: "A dynamic platform for ordering and managing products, featuring add,remove from cart order placement and cart functionality.",
		image: storeimg,
		github: "https://github.com/jhashrikant/shopsavvy-store",
		deploy: "https://shopsavvy-store.vercel.app/"
	},
	{
		id: 2,
		name: "Shopsavvy-Ecommerce Dashboard",
		description: "A complete admin Dashboard empowering administrators to efficiently manage the entire store ecosystem .Features include product management (add, update, delete), category management(add, update),and admin can view products in stock. comprehensive order management capabilities, allowing administrators to view orders, track payment statuses, and ensurseamless order fulfillment.",
		image: adminimg,
		github: "https://github.com/jhashrikant/shopsavvy-admin",
		deploy: "https://shopsavvy-admin.vercel.app/"
	},
	{
		id: 3,
		name: "Spreadsheet",
		description: "A google spreadsheet like app in Vanilla JS .features include selection of multiple cells,focus on cells,add ,edit in cells",
		image: spreadsheetimg,
		github: "https://github.com/jhashrikant/spreadsheet.io",
		deploy: "https://spreadsheet-io.vercel.app/"
	}
	// {
	// 	name: "Weather App",
	// 	description: "This is a weather application that allows users to search for weather information .",
	// 	image: wea,
	// 	github: "https://github.com/akkii02/weather_app_assignment",
	// 	deploy: "https://lucky-cheesecake-70cfd6.netlify.app/"
	// },
	// {
	// 	name: "Expense Tracker",
	// 	description: "A robust tool for managing expenses, offering premium features, data export, and detailed tracking.",
	// 	image: expense, // Replace with actual image URLs
	// 	github: "https://github.com/akkii02/expense_tracker_app"
	// },
]

const Project = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>Projects</h1>
			<div className={styles.container}>
				{projects?.map((project) => (
					<div key={project?.id} className={styles.box}>
						<img src={project.image} alt={project.name} className={styles.image} />
						<h2 className={styles.name}>{project.name}</h2>
						<p className={styles.description}>{project.description}</p>
						<div className={styles.link}  >

							<a href={project.deploy} target="_blank" rel="noopener noreferrer" >
								<button className={styles.btns}>View Live</button>
							</a>
							<a href={project.github} target="_blank" rel="noopener noreferrer" >
								<button className={styles.btn}>Github Repo</button>
							</a>
						</div>
					</div>

				))}
			</div>
		</div>
	);
};
export default Project;