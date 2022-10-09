

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../store/users";
import Action from "./Action/Action";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import "./Users.css";
export default function Users(props) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.usersSlice);
console.log(userInfo)
  const num = userInfo.filter(item => item.role === 'admin')
  const num2 = userInfo.filter(item => item.role === 'user')
  const active=userInfo.filter(item=>item.blocked===false)
  const block=userInfo.filter(item=>item.blocked===true)




  const data3 = [
    {
      name: "Admins",
      count: num.length,
     
     
    },
    {
      name: "Users",
      count: num2.length,
     
     
    },
    {
      name: "Active users",
      count: active.length,
     
     
    },
  
    {
      name: "Blocked users",
      count: block.length,
      
    
    },
    
  ];


  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
<>

<h3>The user state</h3>
          <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data3}
          margin={{
            top: 20,
            right: 40,
            bottom: 20,
            left: 0
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="count" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="count" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>



    <section className="users-admin-container container-com">
      <div className="tit-user-ad">
        <p className="photo-co-1">Photo</p>
        <p>status</p>
        <p>Subscription</p>
        <p>Location</p>
        <p>Phone Number</p>
        <p>role</p>
        <p>Action</p>
    
        </div>


        
      
      {userInfo.map((ele) => (
        <div key={ele.id} className={ele.blocked ? "user-cards  back-red" : "user-cards"}>
          <div className="img-emi-na">
            <div className="photo-id">
              <p>{ele.id}</p>
              {" "}
              {ele.image !== null ? (
                <img
                  className="user-image-admin"
                  alt="imageServiceProvider"
                  src={ele.image}
                />
              ) : (
                <img
                  className="user-image-admin"
                  alt="imageServiceProvider"
                  src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
                />
              )}
            </div>
            <div className="name-email-us">
              <p>{ele.username}</p>
              <p>{ele.email}</p>
            </div>
          </div>

          <div>
            {ele.blocked ? (
              <p className="block-user">BLocked</p>
            ) : (
              <p className="active-user">Active</p>
            )}
          </div>
          <div>{ele.didPay ? <p>Premium</p> : <p>Free</p>}</div>
          <div>
            <p>{ele.city}</p>
          </div>
          <div>
            <p>{ele.phoneNumber}</p>
          </div>
          <div>
            <p>{ele.role}</p>
          </div>
          <div>
            <Action id={ele.id} isBlocked={ele.blocked} />
          </div>
        </div>
      ))}
    </section>
    </>
  );
}
