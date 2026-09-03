import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.js";

function Home() {
	const [tasks] = useLocalStorage("day3-tasks", [
		{
			id: 1,
			title: "Review project requirements",
			description: "Confirm the remaining features for this task manager.",
			completed: false
		},
		{
			id: 2,
			title: "Set up the product catalog",
			description: "Add products and connect the cart actions.",
			completed: true
		}
	]);
	const completedTasks = tasks.filter((task) => task.completed).length;

	return (
		<main className="container py-5">
			<section className="home-intro mb-5">
				<p className="text-uppercase text-muted small mb-2">Task manager</p>
				<h1>Make room for focused work.</h1>
				<p className="lead text-muted">A simple place to organize today&apos;s priorities and keep momentum visible.</p>
				<Link to="/tasks" className="btn btn-primary">View tasks</Link>
			</section>

			<section className="row g-3" aria-label="Task summary">
				<div className="col-md-4"><div className="summary-card"><span>Total tasks</span><strong>{tasks.length}</strong></div></div>
				<div className="col-md-4"><div className="summary-card"><span>Completed</span><strong>{completedTasks}</strong></div></div>
				<div className="col-md-4"><div className="summary-card"><span>Remaining</span><strong>{tasks.length - completedTasks}</strong></div></div>
			</section>
		</main>
	);
}

export default Home;
