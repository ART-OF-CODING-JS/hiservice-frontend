
import cookie from 'react-cookies'
import { Button } from "react-bootstrap";




export default function Logout(props) {


    const handleSignout = ()=>{
       cookie.remove('token')
       cookie.remove('actions')
       cookie.remove('userAccess')
       cookie.remove('userID')
       window.location.reload()
    }
    return(
        <>
         <Button className='mx-4' variant="danger" onClick={handleSignout} >Logout</Button>{' '}
        </>
    )
}