import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getMyReserve } from '../../../store/reservations'
import ServiceInfo from './ServiceInfo-left/ServiceInfo'
import './MyReservation.css'
export default function MyReservation(props) {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMyReserve())  
    },[dispatch])
    const{myReservation} =useSelector(state=>state.reserveSlice)
    return(
        <section className="my-reservation-container container-com">
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
              :<p className="confirm stateus-myservice">Active</p>
            }
            </div>
            </div>
            )}
        </section>
    )
}