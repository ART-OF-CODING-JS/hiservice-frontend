import cookie from 'react-cookies';
import {  decodeToken } from "react-jwt";
import './UserInfo.css'
export default function UserInfo(){

    const userInof = decodeToken(cookie.load('token'))
  let userArrInfo = []

  userArrInfo.push(userInof)
  console.log(userArrInfo)

    return(
        <section className='userInfo container-com'>
       {userArrInfo.map(ele=>
        <div key={ele.id}>
            <p className='username-setting'> {ele.username}</p>
            <p className='email-setting'>{ele.email}</p>
            <img alt='personal' src={ele.image}/>



        </div>
        
        
        
        
        )}
        </section>
    )
}