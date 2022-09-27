import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getOneService } from '../../../../store/services' 
import ProviderInfo from '../ProviderInfo/ProviderInfo'
// import ServiceProviderInfo from '../../ServicesDetails/ServiceProviderInfo/ProviderInfo'
import './ServiceInfo.css'
import { getAllServices } from '../../../../store/services'
import { Link } from 'react-router-dom'
export default function ServiceInfo({serviceId}) {
    const dispatch = useDispatch()
    const{oneService,allServices} =useSelector(state=>state.servicesSlice)
useEffect(()=>{
    dispatch(getAllServices())
},[dispatch])
    return(
       <>{
        allServices.filter(ele=>ele.id===serviceId).map(ele=>
            
            <div className='ServiceInfo-'>
                <div className='img-title-myrserv'>
            <Link className='Link' to={`/Services/${ele.id}`}><img className='img-myservice' alt='service Images' src={ele.image}/></Link>
            <p>{ele.title}</p>
            </div>
            {/* <div><ProviderInfo useProviderId={ele.userID}/></div> */}
            </div>
            )
       }</>
      
    )
}