import React from "react";
import { useState } from "react";
import TaskList from "../components/TaskList.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";

function Tasks() {
	const [tasks, setTasks] = useLocalStorage("day3-tasks", [
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
	const [filter, setFilter] = useState("all");

	const visibleTasks = tasks.filter((task) => {
		if (filter === "active") return !task.completed;
		if (filter === "completed") return task.completed;
		return true;
	});

	const toggleTask = (id) => {
		setTasks((currentTasks) => currentTasks.map((task) =>
			task.id === id ? { ...task, completed: !task.completed } : task
		));
	};

	const deleteTask = (id) => {
		setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
	};

	return (
		<main className="container py-5">
			<div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
				<div>
					<p className="text-uppercase text-muted small mb-1">Workspace</p>
					<h1 className="mb-1">Your tasks</h1>
					<p className="text-muted mb-0">Keep the important work moving.</p>
				</div>
				<select className="form-select task-filter" value={filter} onChange={(event) => setFilter(event.target.value)}>
					<option value="all">All tasks</option>
					<option value="active">Active</option>
					<option value="completed">Completed</option>
				</select>
			</div>

			<TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
		</main>
	);
}

export default Tasks;
