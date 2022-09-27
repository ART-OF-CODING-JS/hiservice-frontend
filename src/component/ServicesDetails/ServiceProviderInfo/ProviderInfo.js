
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllUser } from '../../../store/users'
import './ProviderInfo.css'
export default function ServiceProviderInfo({ServiceProviderId}) {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.usersSlice)

    useEffect(()=>{
        dispatch(getAllUser())
    },[ServiceProviderId, dispatch])


    return(
        <section className='container-serviceProvider'>
       {userInfo.filter(ele=>ele.id===ServiceProviderId).map((ele,idx)=>
        <div className='userprovider-item' key={idx}>
            <div className='image-service-provider'>
                {
                ele.image !== null ?<img className='service-pro-image' alt='imageServiceProvider' src={ele.image}/>
                :<img className='service-pro-image' alt='imageServiceProvider' src='https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg'/>
                }

            </div>
            <div className='service-provider-info'>
                <p>Name: {ele.username}</p>
                <p>Profession: {ele.professions}</p>
                <p>Email: {ele.email}</p>
                <p>Gender: {ele.gender}</p>
             
            </div>



        </div>
        
        
        
        
        )}
        </section>
    )
}