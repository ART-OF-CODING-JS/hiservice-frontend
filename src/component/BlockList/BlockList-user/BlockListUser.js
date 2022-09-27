
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getBlockList_user} from '../../../store/block'
import './BlockListUser.css'
import UnBlockProvider from './Unblock/UnBlock_User';
export default function BlockListUser(props) {
    const dispatch = useDispatch()
    const {blockListUser} = useSelector(state=>state.blockSlice)
    useEffect(()=>{
        dispatch(getBlockList_user())
    },[dispatch])

    return(
        <section className="block-list-user-container container-com">
           { blockListUser.map(ele=>
           <div className="block-list-user-cards" key={ele.id}>
            <div className='image-service-provider'>
                {
                ele.image !== null ?<img className='service-pro-image' alt='imageServiceProvider' src={ele.image}/>
                :<img className='service-pro-image' alt='imageServiceProvider' src='https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg'/>
                }

            </div>
            <div className="name-email">
                <p className='tit-blo'>Info</p>
                <p>{ele.username}</p>
                <p>{ele.email}</p>
            </div>
            <div className="prof">
                <p className='tit-blo'>Profession</p>
                <p>{ele.professions}</p>
    
            </div>
            <div>
              <UnBlockProvider providerID={ele.id}/>
            </div>

            </div>)}
        
        </section>
    )
}