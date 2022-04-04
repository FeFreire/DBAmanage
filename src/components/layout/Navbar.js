import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../components/img/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img className={styles.image} src={logo} alt="DBA" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Person</Link>
          </li>
          <li className={styles.item}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newCourse">New Course</Link>
          </li>
          <li className={styles.item}>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
