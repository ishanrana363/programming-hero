import React from "react";
import PriceOption from "../price-option/PriceOption";

const PriceOptions = () => {
    const gymPrices = [
        {
          "gym_name": "Fitness Pro",
          "location": "Downtown",
          "membership_plans": [
            {
              "plan": "Basic Monthly",
              "price": 40,
              "features": ["Gym Access", "Locker Room", "1 Free Guest Pass"]
            },
            {
              "plan": "Premium Monthly",
              "price": 60,
              "features": ["Gym Access", "Locker Room", "Group Classes", "Sauna", "2 Free Guest Passes"]
            },
            {
              "plan": "Personal Training Package",
              "price": 200,
              "features": ["5 Personal Training Sessions", "Nutritional Guidance", "Access to Premium Facilities"]
            }
          ]
        },
        {
          "gym_name": "Health Hub",
          "location": "Uptown",
          "membership_plans": [
            {
              "plan": "Basic Monthly",
              "price": 45,
              "features": ["Gym Access", "Locker Room", "Towel Service"]
            },
            {
              "plan": "Elite Monthly",
              "price": 75,
              "features": ["Gym Access", "Locker Room", "Group Classes", "Swimming Pool Access", "Steam Room", "3 Free Guest Passes"]
            },
            {
              "plan": "Personal Training Package",
              "price": 250,
              "features": ["8 Personal Training Sessions", "Custom Workout Plan", "Access to Premium Facilities"]
            }
          ]
        },
        {
          "gym_name": "Iron Temple",
          "location": "Suburb",
          "membership_plans": [
            {
              "plan": "Standard Monthly",
              "price": 35,
              "features": ["Gym Access", "Free Weights", "Cardio Machines"]
            },
            {
              "plan": "Advanced Monthly",
              "price": 55,
              "features": ["Gym Access", "Free Weights", "Cardio Machines", "Group Classes", "Sauna"]
            },
            {
              "plan": "Personal Training Package",
              "price": 180,
              "features": ["4 Personal Training Sessions", "Custom Workout Plan", "Access to Premium Equipment"]
            }
          ]
        },
        {
          "gym_name": "Body Works",
          "location": "City Center",
          "membership_plans": [
            {
              "plan": "Basic Monthly",
              "price": 50,
              "features": ["Gym Access", "Locker Room", "Group Classes", "1 Free Guest Pass"]
            },
            {
              "plan": "All-Inclusive Monthly",
              "price": 85,
              "features": ["Gym Access", "Group Classes", "Swimming Pool Access", "Spa Access", "Personalized Nutrition Plan", "5 Free Guest Passes"]
            },
            {
              "plan": "Personal Training Package",
              "price": 300,
              "features": ["10 Personal Training Sessions", "Custom Workout and Nutrition Plan", "Access to VIP Facilities"]
            }
          ]
        },
        {
          "gym_name": "Peak Fitness",
          "location": "Midtown",
          "membership_plans": [
            {
              "plan": "Basic Monthly",
              "price": 55,
              "features": ["Gym Access", "Locker Room", "Group Classes"]
            },
            {
              "plan": "Premium Monthly",
              "price": 90,
              "features": ["Gym Access", "Group Classes", "Sauna", "Swimming Pool Access", "Personal Trainer Consultation", "Unlimited Guest Passes"]
            },
            {
              "plan": "Personal Training Package",
              "price": 350,
              "features": ["12 Personal Training Sessions", "Custom Nutrition and Workout Plan", "Access to Premium and VIP Areas"]
            }
          ]
        }
      ];
      
      

  return (
    <div>
      <h1>Best price in town </h1>
      <div className="grid grid-cols-3 gap-6 mx-12 my-8 " >
        {
            gymPrices.map((item,i)=>{
                return (
                    <div key={i} >
                        <PriceOption item = {item} >

                        </PriceOption>
                    </div>
                )
            })
        }
    </div>
    </div>
  );
};

export default PriceOptions;
