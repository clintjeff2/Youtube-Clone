import React from 'react';
import styles from './comments.module.css';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

function Comments() {
	return (
		<div className={styles.comment}>
			<img src="https://yt3.googleusercontent.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s176-c-k-c0x00ffffff-no-rj" alt="" />
			<div className={styles.commentInfo}>
				<span>
					user name <span>8 years ago</span>
				</span>
				<div className={styles.commentText}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
					accusamus nemo vel repellat, vitae veritatis provident quae sequi
					consectetur dolorem omnis ducimus! Quia, aperiam repellat?
				</div>
				<div className={styles.actions}>
					<span>
						<AiOutlineLike />
						<span>73</span>
					</span>
					<span>
						<AiOutlineDislike />
						<span>5</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Comments;
