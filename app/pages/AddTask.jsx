import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.js";

function AddTask() {
	const [tasks, setTasks] = useLocalStorage("day3-tasks", []);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const trimmedTitle = title.trim();
		if (!trimmedTitle) return;

		setTasks([
			...tasks,
			{
				id: Date.now(),
				title: trimmedTitle,
				description: description.trim(),
				completed: false
			}
		]);
		navigate("/tasks");
	};

	return (
		<main className="container py-5">
			<div className="add-task-header mb-4">
				<p className="text-uppercase text-muted small mb-1">Workspace</p>
				<h1 className="mb-1">Add a task</h1>
				<p className="text-muted mb-0">Capture the next thing you want to move forward.</p>
			</div>

			<form className="add-task-form" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="task-title" className="form-label">Task title</label>
					<input
						id="task-title"
						className="form-control"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						placeholder="e.g. Prepare weekly report"
						required
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="task-description" className="form-label">Description <span className="text-muted">(optional)</span></label>
					<textarea
						id="task-description"
						className="form-control"
						rows="4"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						placeholder="Add a little context"
					/>
				</div>

				<div className="d-flex gap-2">
					<button type="submit" className="btn btn-primary">Add task</button>
					<Link to="/tasks" className="btn btn-outline-secondary">Cancel</Link>
				</div>
			</form>
		</main>
	);
}

export default AddTask;
