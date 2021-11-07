import GrandChildComp from "./GrandChildComp";
import { observer } from "mobx-react-lite";
const ChildComp = ({ store }) => {
  return (
    <div style={{ padding: "16px", border: "1px solid green" }}>
      All users:
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {store.getAllUsers.map((singlePerson, index) => {
            return (
              <tr key={index}>
                <td>{singlePerson.id}</td>
                <td>{singlePerson.firstName}</td>
                <td>{singlePerson.lastName}</td>
                <td>{singlePerson.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <GrandChildComp store={store} />
    </div>
  );
};

export default observer(ChildComp);
