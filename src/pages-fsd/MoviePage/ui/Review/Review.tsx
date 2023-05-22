import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./Review.module.scss";

interface IReview {
  name: string;
  body: string;
  date: string;
  likesNum: number;
}

const Review: FC<IReview> = ({ name, body, date, likesNum = 1 }) => {
  // редакс прикрутить
  const [likes, setLikes] = useState(likesNum);

  const addLike = function () {
    setLikes(likes + 1);
    return likes;
  };

  const removeLike = function () {
    setLikes(likes - 1);
    return likes;
  };

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <p className={styles.body}>{body}</p>
      <div className={styles.dateLikesBlock}>
        <span className={styles.date}>{date}</span>
        <div className={styles.likeDislikeBlock}>
          <button onClick={addLike} className={cn(styles.button, styles.up)} />
          {likes >= 0 ? (
            <span className={styles.like}>{likes}</span>
          ) : (
            <span className={styles.dislike}>{likes * -1}</span>
          )}
          <button
            onClick={removeLike}
            className={cn(styles.button, styles.down)}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
