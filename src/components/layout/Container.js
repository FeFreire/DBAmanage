
import styles from "./Container.module.css";

function Container(props) {
  return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>; //props.children para que o conteúdo de quem está abaixo do componente seja exibido ..template string
}

export default Container;
