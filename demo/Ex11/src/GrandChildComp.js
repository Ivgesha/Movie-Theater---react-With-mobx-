import { observer } from "mobx-react-lite";
const GrandChildComp = ({ store }) => {
  return (
    <div style={{ padding: "16px", border: "1px solid blue" }}>
      <label>Adult users:</label>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
        {store.getAdults.map((singlePerson, index) => {
          return (
            <tr key={index}>
              <td>{singlePerson.id}</td>
              <td>{singlePerson.firstName}</td>
              <td>{singlePerson.lastName}</td>
              <td>{singlePerson.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default observer(GrandChildComp);
