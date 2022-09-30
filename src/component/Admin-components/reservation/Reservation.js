import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllReservation, } from '../../../store/reservations'
import './reservation.css'
import ServiceInfo from '../../Reservation/MyReservation/ServiceInfo-left/ServiceInfo'
import DeleteReservation from '../../Reservation/MyReservation/DeleteReservation/DeleteReservation'
import EditReservation from './EditReservation'
import Pagination from '../../pagenation/Pagination'
export default function Reservation(props) {
    const dispatch = useDispatch()
    const{allReservation} =useSelector(state=>state.reserveSlice)

    useEffect(()=>{
        dispatch(getAllReservation())  

    },[dispatch])


       ///////////pagination/////
       const [currentPage, setCurrentPage] = useState(1);
       const [postsPerPage,setPerPage] = useState(4);
       const indexOfLastRecord = currentPage * postsPerPage;
       const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
       const currentRecords = allReservation.slice(indexOfFirstRecord, indexOfLastRecord);
    return(
        <>
        <section className="my-reservation-container container-com">
           {
                currentRecords.map((ele,idx)=>
            <div className='reservations-cards' key={idx}>
           
            <div className='service-left'><ServiceInfo serviceId={ele.serviceID}/></div>
            
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
            <div>
                <DeleteReservation reserveId={ele.id}/>
                <br/>
                <EditReservation reserveId={ele.id}/>
             </div>
             </div>
            )}
        </section>
        <Pagination 
        recordsPerPage={postsPerPage}
        totalPosts={allReservation.length}
        setCurrentPage={setCurrentPage}
        />
        </>
    )
}