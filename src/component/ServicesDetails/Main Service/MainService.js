

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
            <p className="title-main-service">{ele.title}</p>
            <p className="time">{ele.createdAt}</p>
            <img alt="images" src={ele.image} />
            <p className="disc-main-service">
              <div>description</div>
              {ele.description}
            </p>
          </div>

        <div className="about-service">
        <p className="address">Address {ele.city}</p>
        <p className="category">Category {ele.department}</p>
        
        <div className="btn-main-service">
            <button className="callNum">Call Number</button>
            <button className="chat"> Chat</button>
            <button className="reserve"><Reservation serviceId={ele.id}/></button>
           
        </div>
        <ServiceProviderInfo ServiceProviderId ={ele.userID} />
        <div className="block-report">
            {/* <button className="block">Block Service provider</button> */}
            <BlockProvider providerID={ele.userID}/>
            <button className="report">Report Service</button>
        </div>
        </div>
    </div>
    )
    }
      </section>
  );
}
