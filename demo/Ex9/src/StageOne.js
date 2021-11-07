import { useHistory } from "react-router-dom";

const StageOne = () => {
  const history = useHistory();

  const goToStageTwo = () => {
    history.push("/stageTwo");
  };
  return (
    <div>
      <button onClick={goToStageTwo}>Go to stage 2</button>
    </div>
  );
};

export default StageOne;
