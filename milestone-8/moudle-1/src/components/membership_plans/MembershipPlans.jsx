import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Feature from '../Feature/Feature';

const MembershipPlans = ({memerData}) => {
    const {plan,price,features} = memerData;
  return (
    <div>
        {/* <p className='flex items-center gap-3 ' >
            <FaCheckCircle></FaCheckCircle>
            plan : {plan},
            price : {price},
        </p>
        {
            features.map((item,i)=>{
                return (
                    <div key={i} >
                        <Feature featureData={item} ></Feature>
                    </div>
                )
            })
        } */}
    </div>
  )
}

export default MembershipPlans
