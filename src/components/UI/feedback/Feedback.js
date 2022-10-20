import { useEffect, useState } from "react";
import axiosClient from "../../../api/apiAxios";

export default function Feedback() {

	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [reviewMsg, setReviewMsg] = useState('');

	const [feedbackUser, setFeedbackUser] = useState([]);
	useEffect(() => {
		const getFeedback = async () => {
			try {
				const res = await axiosClient.get('feedbackUser');
				setFeedbackUser(res);
			} catch (err) {
				console.log('Error getting prodcuts failed:', err.message);
			}
		};
		getFeedback();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		console.log(enteredName, enteredEmail, reviewMsg);
	};

	return (
		<div className="tab__form mb-3">
			{feedbackUser.map((item) => (
				<div className="review pt-3">
					<p className="user__name mb-0">{item.username}</p>
					<p className="user__email">{item.userMail}</p>
					<p className="feedback__text fst-italic">{item.feedback}</p>
				</div>
			))}

			<form className="form" onSubmit={submitHandler}>
				<div className="form__group">
					<input
						type="text"
						placeholder="Enter your name"
						onChange={(e) => setEnteredName(e.target.value)}
						required
					/>
				</div>

				<div className="form__group">
					<input
						type="text"
						placeholder="Enter your email"
						onChange={(e) => setEnteredEmail(e.target.value)}
						required
					/>
				</div>

				<div className="form__group">
					<textarea
						rows={5}
						type="text"
						placeholder="Write your review"
						onChange={(e) => setReviewMsg(e.target.value)}
						required
					/>
				</div>

				<button type="submit" className="addToCart__btn">
					Submit
				</button>
			</form>
		</div>
	);
}
