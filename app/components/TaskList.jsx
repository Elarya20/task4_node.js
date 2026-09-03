import React from "react";
import TaskCard from "./TaskCard.jsx";

function TaskList({ tasks, onToggle, onDelete }) {
	if (tasks.length === 0) {
		return <div className="alert alert-light border">No tasks match this filter.</div>;
	}

	return (
		<div className="task-list">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
			))}
		</div>
	);
}

export default TaskList;
