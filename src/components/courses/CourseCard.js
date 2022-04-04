import styles from "./CourseCard.module.css";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function CourseCard({
  id,
  name,
  day,
  time,
  duration,
  instructor,
  handleRemove,
}) {
  //as props q ele vai receber

  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.course_card}>
      <h4>{name}</h4>
      <p className={styles.course_text}>
        <span></span>
        Prof. {instructor}
      </p>
      <p className={styles.course_text}>
        <span></span>
        {day}
      </p>
      <p className={styles.course_text}>
        <span></span>
       Semesters: {duration}
      </p>
      <p className={styles.course_text}>
        <span className={`${styles[time.toLowerCase()]}`}></span>
        {time}
      </p>
      <div className={styles.course_card_actions}>
    <Link to={`/course/${id}`}>
          <BsPencil />
          Edit
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
