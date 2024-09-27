import React from "react";
import MembershipPlans from "../membership_plans/MembershipPlans";

const PriceOption = ({ item }) => {
  const { gym_name, location, membership_plans } = item;
  return (
    <div className="bg-blue-500 flex w-full flex-col px-4 py-6 rounded-xl text-center ">
      <h2>
        <span className="text-5xl"> {gym_name} </span>
        <span className="text-xl">{location}</span>
      </h2>
      <div className="flex-grow" >
        {membership_plans.map((item, i) => {
          return <div key={i}>
            <MembershipPlans memerData = {item} ></MembershipPlans>
          </div>
        })}
      </div>
      <div className="" >
        <button className="btn my-8 " >Buy now</button>
      </div>
    </div>
  );
};

export default PriceOption;
