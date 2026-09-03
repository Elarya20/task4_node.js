import React from "react";

function About() {
	return (
		<main className="container py-5">
			<div className="row justify-content-center">
				<div className="col-lg-9">
					<p className="text-uppercase text-muted small mb-1">About the workspace</p>
					<h1 className="mb-3">A calmer way to organize work.</h1>
					<p className="lead text-muted mb-5">
						Task Manager keeps tasks and learning resources together in one simple React application.
					</p>

					<div className="row g-4">
						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h2 className="h5">Plan clearly</h2>
									<p className="text-muted mb-0">Create tasks with enough context to know exactly what comes next.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h2 className="h5">Stay flexible</h2>
									<p className="text-muted mb-0">Filter, complete, reopen, or remove tasks as priorities change.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h2 className="h5">Keep momentum</h2>
									<p className="text-muted mb-0">Your tasks remain available in this browser between visits.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default About;
