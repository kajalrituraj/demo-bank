import React from "react";
import BeneficiariesCards from "./cards";
import TitleWrapper from "../../components/shared/title-wrapper";

const data = [
  { account: "10890909", nickname: "Sumit Saurav" },
  { account: "23456788", nickname: "Ravi Kumar" },
  { account: "90738233", nickname: "Michael Jhonson" },
]

const Beneficiaries = () => {
  const handleAddBeneficiary = () => { };

  return (
    <>
      <TitleWrapper title={"Beneficiaries"} />
      <div className="container" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <button className="btn btn-primary mb-3" style={{ width: 200, marginRight: 37 }} onClick={handleAddBeneficiary}>
            Add New Beneficiaries
          </button>
        </div>
        <BeneficiariesCards data={data} />
      </div>
    </>
  );
};

export default Beneficiaries;
