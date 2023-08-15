import React from 'react';
import styles from './comment-form.module.css';

function CommentForm() {
	return (
		<form action="" className={styles.commentForm}>
			<h4>Commenting as username</h4>
			<div className={styles.userInfo}>
				<img
					src="https://yt3.googleusercontent.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s176-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div>
					<span className={styles.userName}>Jefferson Youashi</span>
					<span className={styles.userId}>@ljioej-23a57d</span>
				</div>
			</div>
			<div className={styles.form}>
				<input type="text" placeholder="Add a comment" className={styles.commentInput} />
				<div className={styles.formActions}>
					<button className="light">Cancel</button>
					<button className="light" disabled >Comment</button>
				</div>
			</div>
		</form>
	);
}

export default CommentForm;
