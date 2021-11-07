import Person from "./Person.js";
const Persons = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Persosn List: </h1>
      {props.persons.map((person, index) => {
        return <Person key={index} name={person.name} tasks={person.tasks} />;
      })}
    </div>
  );
};

export default Persons;
