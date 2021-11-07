import PhonesComp from "./PhonesComp.js";

const PersonComp = () => {
  const jsonObj = {
    homePhone: "932-7264",
    mobilePhone: "054-6311467",
    faxNumber: "faxNumber 019",
  };
  return (
    <div>
      <PhonesComp jsonObj={jsonObj} />
    </div>
  );
};

export default PersonComp;
