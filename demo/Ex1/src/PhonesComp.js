const PhonesComp = (props) => {
  const btnOnClickEventListener = (event) => {
    console.log(props.jsonObj.homePhone);
    console.log(props.jsonObj.mobilePhone);
    console.log(props.jsonObj.faxNumber);
  };
  return (
    <div>
      <button
        onClick={btnOnClickEventListener}
        style={{ backgroundColor: "red" }}
      >
        Click me
      </button>

      <h2>Home phone number: {props.jsonObj.homePhone}</h2>
      <h2>Mobile phone number: {props.jsonObj.mobilePhone}</h2>
      <h2>Fax phone number: {props.jsonObj.faxNumber}</h2>
    </div>
  );
};

export default PhonesComp;
