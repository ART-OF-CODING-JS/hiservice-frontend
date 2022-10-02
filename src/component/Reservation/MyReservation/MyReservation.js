import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getMyReserve } from '../../../store/reservations'
import ServiceInfo from './ServiceInfo-left/ServiceInfo'
import './MyReservation.css'
import DeleteReservation from './DeleteReservation/DeleteReservation'
import { Spinner } from 'react-bootstrap'
export default function MyReservation(props) {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMyReserve())  
    },[dispatch])
    const{myReservation,isLoading} =useSelector(state=>state.reserveSlice)
    return(
        isLoading?<div className="spinner-service" ><Spinner animation="border" variant="dark" /></div>:  
        
           <section className="my-reservation-container container-com">
<div className="image-all-section"><img alt="h" src='https://i.postimg.cc/mrHFFMNy/pexels-cottonbro-4065889.jpg'/>
      <p>My Reservation </p></div>
           {
                myReservation.map((ele,idx)=>
            <div className='reservations-cards' key={idx}>
           
            <div className='service-left'><ServiceInfo serviceId={ele.serviceID}/></div>
            {/* <div className='service-provider-middle'></div> */}
            <div className='reserve-info-right' >
                <p><strong>Date:</strong> {ele.date}</p>
                <p> <strong>Time:</strong> {ele.time}</p>
                <p><strong>Note:</strong> {ele.description}</p>
                { 
              ele.status===null? <p className="inProgress stateus-myservice">inProgress</p>
              :ele.status ==='reject'?<p className="reject stateus-myservice">Rejected</p>
              :<p className="confirm stateus-myservice">confirmed</p>
            }
            </div>
            <div><DeleteReservation reserveId={ele.id}/></div>
            </div>
            )}
        </section>
    )
}