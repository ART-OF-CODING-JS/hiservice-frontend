import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportsAdmin } from "../../../store/reports";
import ServiceInfo from "../../Reservation/MyReservation/ServiceInfo-left/ServiceInfo";
import ConfirmReport from "./ConfirmReport/ConfirmReport";
import RejectReport from "./RejectReport/RejectReport";
import './Report-admin.css'
export default function ReportAdmin(props) {
    const dispatch = useDispatch();
    const { reportsAdmin } = useSelector((state) => state.reportsSlice);
    useEffect(()=>{
        dispatch(getReportsAdmin())
    },[dispatch])
    return(
        <section className="reports-admin container-com">
            <div className="title-report-admin">
            <p>Service</p>
            <p>Report</p>
            <p>action</p>
            </div>
            {
          reportsAdmin.map(ele=>
            <div key={ele.id} className='report-admin-cards'>
            <div><ServiceInfo serviceId={ele.serviceID}/></div>
            <div>
            {ele.description}
            </div>
            <div>
                <div className="btn-report">
                <div> <ConfirmReport id={ele.id}/></div>
                <div><RejectReport id={ele.id}/></div>
      
            
                </div>
                <p>{ele.status}</p>
                </div>

            </div>
            
            
            )
            }
        </section>
    )
}