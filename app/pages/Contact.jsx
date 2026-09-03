import React from "react";
import { useState } from "react";

function Contact() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		event.currentTarget.reset();
	};

	return (
		<main className="container py-5">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="mb-4">
						<p className="text-uppercase text-muted small mb-1">Get in touch</p>
						<h1 className="mb-1">Contact us</h1>
						<p className="text-muted mb-0">Have a question or an idea for improving your workspace?</p>
					</div>

					{submitted && (
						<div className="alert alert-success" role="status">
							Thanks for reaching out. We&apos;ll get back to you soon.
						</div>
					)}

					<form className="card shadow-sm" onSubmit={handleSubmit}>
						<div className="card-body p-4">
							<div className="mb-3">
								<label htmlFor="contact-name" className="form-label">Name</label>
								<input id="contact-name" name="name" className="form-control" required />
							</div>

							<div className="mb-3">
								<label htmlFor="contact-email" className="form-label">Email</label>
								<input id="contact-email" name="email" type="email" className="form-control" required />
							</div>

							<div className="mb-4">
								<label htmlFor="contact-message" className="form-label">Message</label>
								<textarea id="contact-message" name="message" className="form-control" rows="5" required />
							</div>

							<button type="submit" className="btn btn-primary">Send message</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Contact;
