const ExThreeComp = () => {
  const people = [
    { name: "Dana", age: "20", city: "Haifa" },
    { name: "Ron", age: "22", city: "Tel Aviv" },
    { name: "Dov", age: "31", city: "Ashdod" },
    { name: "Vered", age: "19", city: "Eilat" },
  ];

  const loadList = people.map((person, index) => {
    return (
      <li key={index}>
        {person.name}
        <ul>
          <li>{person.age}</li>
          <li>{person.city}</li>
        </ul>
      </li>
    );
  });

  return (
    <div>
      <ul>{loadList}</ul>
    </div>
  );
};

export default ExThreeComp;
