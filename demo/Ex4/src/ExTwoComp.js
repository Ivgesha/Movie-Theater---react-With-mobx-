const ExTwoComp = () => {
  const people = [
    { name: "Dana", age: "20", city: "Haifa" },
    { name: "Ron", age: "22", city: "Tel Aviv" },
    { name: "Dov", age: "31", city: "Ashdod" },
    { name: "Vered", age: "19", city: "Eilat" },
  ];

  const loadTableData = people.map((person, index) => {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.city}</td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        {loadTableData}
      </table>
    </div>
  );
};

export default ExTwoComp;
