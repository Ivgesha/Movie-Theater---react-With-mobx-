import { useParams } from "react-router";

const StageFour = () => {
  const { firstName, lastName, city } = useParams();
  return (
    <div>
      <h2>First Name: </h2>
      <label>{firstName}</label>
      <h2>Last Name: </h2>
      <label>{lastName}</label>
      <h2>City: </h2>
      <label>{city}</label>
    </div>
  );
};

export default StageFour;
