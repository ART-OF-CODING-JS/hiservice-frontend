import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import { getMyReserve } from '../../../store/reservations'
// import './MyReservation.css'
// import DeleteReservation from './DeleteReservation/DeleteReservation'
import ServiceProviderInfo from '../../ServicesDetails/ServiceProviderInfo/ProviderInfo'
import ServiceInfo from '../MyReservation/ServiceInfo-left/ServiceInfo'
import ConfirmReserve from './ConfirmReserve/ConfirmReserve'
import RejectReserve from './RejectReserve/RejectReserve'
import './ReserveMyService.css'

import { getProviderReservations} from '../../../store/reservations'
import { Spinner } from 'react-bootstrap'

export default function ReserveMyService(props) {
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(getProviderReservations())  
    },[dispatch])
    const{ProviderReservations,isLoading} =useSelector(state=>state.reserveSlice)
    console.log(ProviderReservations);
    return(
        isLoading?<div className="spinner-service" ><Spinner animation="border" variant="dark" /></div>:     <section className="Reserve-myService-container container-com">
            <div className="image-all-section"><img alt="h" src='https://i.postimg.cc/mrHFFMNy/pexels-cottonbro-4065889.jpg'/>
      <p>Reserve My Services </p></div>
            <div className='title-reserve-myservice'>
            <p>Your Service</p>
            <p>schedule</p>
            <p>Client Info</p>
            <p>Status</p>
            </div>
           {
                ProviderReservations.map((ele,idx)=>
            <div className='ReserveMyService-cards' key={idx}>
           
            <div className='service-left'>
                
                <ServiceInfo serviceId={ele.serviceID}/>
                </div>
            {/* <div className='service-provider-middle'></div> */}
            <div className='reserve-info-right' >
                <p><strong>Date:</strong> {ele.date}</p>
                <p> <strong>Time:</strong> {ele.time}</p>
                <p><strong>Note:</strong> {ele.description}</p>
            </div>
            <div>
            <ServiceProviderInfo ServiceProviderId={ele.userID}/>
             
            </div>
            <div className='btn-reserve-my'>
            <RejectReserve id={ele.id}/>
            <ConfirmReserve id={ele.id}/>
            <p className='status-reserve'>{ele.status}</p>
            </div>
            {/* <div><DeleteReservation reserveId={ele.id}/></div> */}
            </div>
            )}
        </section>
    )
}