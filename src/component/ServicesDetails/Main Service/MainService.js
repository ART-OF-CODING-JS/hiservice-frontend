

import Access from '../../Access/Access';
import Reservation from '../../Reservation/SendReservation/Reservation';
import ServiceProviderInfo from '../ServiceProviderInfo/ProviderInfo';
import BlockProvider from './Block service provider/BlockProvider';
import './MainService.css'

export default function MainService(props) {
  return (
    <section className="container-main-service container-com">
      {props.oneService.slice(0, 1).map(ele=> 
        <div className="main-service-item" key={ele.id}>
          <div className="tit-img">
            <p className="time">{ele.createdAt}</p>
            <img className='img-main' alt="images" src={ele.image} />
       
          </div>

        <div className="about-service">
        <p className="title-main-service">{ele.title}</p>
        {/* <p className="address">Address {ele.city}</p>
        <p className="category">Category {ele.department}</p> */}
        
        <div className="btn-main-service">
          <di></di>
            <button className="callNum">Call Number</button>
            <button className="chat"> Chat</button>
            <button className="reserve"><Reservation serviceId={ele.id}/></button>
           
        </div>
        <ServiceProviderInfo ServiceProviderId ={ele.userID} />
        <div className="disc-main-service">
             <p> <strong>Description</strong></p>
              {ele.description}
            </div>
        <div className="block-report">
            {/* <button className="block">Block Service provider</button> */}
            <Access role={'user'}><BlockProvider providerID={ele.userID}/></Access>
            <Access role={'user'}> <button className="report">Report Service</button></Access>
        </div>
        </div>
    </div>
    )
    }
      </section>
  );
}
