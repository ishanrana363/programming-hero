import { useLoaderData } from "react-router-dom"
import AllUsers from "../all-user/AllUsers";


const Users = () => {
  const users = useLoaderData();
  
  return (
    <div>
        <div className="grid lg:grid lg:grid-cols-4 max-w-screen-xl mx-auto  md:grid md:grid-cols-3 gap-4 my-10 " >
          {
            users.map((item,i)=>{
              return (
                <div key={i} >
                  <AllUsers users = {item} ></AllUsers>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Users
