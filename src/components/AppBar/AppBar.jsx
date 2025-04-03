import style from "./AppBar.module.css";

//* Components
import TrainingCounter from "../TrainingCounter/TrainingCounter";
import TypeFIlter from "../TypeFilter/TypeFIlter";

const AppBar = () => {
  return (
    <header className={style.headerWrapper}>
      <div>
        <h2>Trainings</h2>
        <TrainingCounter />
      </div>

      <div>
        <h2>Filter by type:</h2>
        <TypeFIlter />
      </div>
    </header>
  );
};

export default AppBar;
