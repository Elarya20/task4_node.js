import React from "react";

function TaskCard({ task, onToggle, onDelete }) {
	return (
		<article className={`task-card ${task.completed ? "is-complete" : ""}`}>
			<div>
				<h3>{task.title}</h3>
				<p>{task.description || "No description added."}</p>
			</div>

			<div className="task-card__actions">
				<span className={`badge ${task.completed ? "bg-success" : "bg-warning text-dark"}`}>
					{task.completed ? "Completed" : "Pending"}
				</span>
				<button className="btn btn-sm btn-outline-primary" onClick={() => onToggle(task.id)}>
					{task.completed ? "Reopen" : "Complete"}
				</button>
				<button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(task.id)}>
					Delete
				</button>
			</div>
		</article>
	);
}

export default TaskCard;
