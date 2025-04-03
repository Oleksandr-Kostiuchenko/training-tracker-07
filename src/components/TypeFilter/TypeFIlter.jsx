import style from "./TypeFIlter.module.css";

//* Components
import Button from "../Button/Button";

const TypeFIlter = () => {
  return (
    <div className={style.filterWrapper}>
      <Button>Cardio</Button>
      <Button>Power</Button>
      <Button>Functional</Button>
    </div>
  );
};

export default TypeFIlter;
