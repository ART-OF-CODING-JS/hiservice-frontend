
import cookie from 'react-cookies'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Logout(props) {

    const navigate = useNavigate();
    const handleSignout = ()=>{
       cookie.remove('token')
       cookie.remove('actions')
       cookie.remove('userAccess')
       cookie.remove('userID')
       navigate('/')
  window.location.reload()
    }
    return(
        <>
         <Button className='mx-4' variant="danger" onClick={handleSignout} >Logout</Button>{' '}
        </>
    )
}