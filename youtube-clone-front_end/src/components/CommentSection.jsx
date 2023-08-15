import React from 'react';
import styles from './comment-section.module.css';
import CommentForm from './CommentForm';
import Comments from './Comments';

function CommentSection() {
	return (
		<div className={styles.comments}>
			<h3>2760 Comments</h3>
			<CommentForm />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
			<Comments />
		</div>
	);
}

export default CommentSection;
