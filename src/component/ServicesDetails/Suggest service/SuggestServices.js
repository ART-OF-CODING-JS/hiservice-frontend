




import { Link } from 'react-router-dom';
import './SuggestServices.css'
export default function SuggestServices(props) {
const handleReload = ()=>{
    window.scrollTo(0, 0)
}
    return(
        props.SuggestServ[1]? <>
                <p className='similar-services'>Similar Services</p>
            <div className='suggest-service-card'>
        {
         props.SuggestServ[1].map(ele=>
                   <div className='t' key={ele.id}>
                <div className="image-card">
                    <Link to={`/Services/${ele.id}`}><img   onClick={handleReload}className='img' alt='service' src={ele.image}/></Link>
                </div>
                <div className="card-info">
                    <p className="title">{ele.title}</p>
                    <p className="city">{ele.city}</p>
                    <p className="department">{ele.department}</p>
                    <div className=''>
                        <button className="add-fav btn-card">Add to Favorite</button>
                        <button className="report btn-card" >Reports</button>
                    </div>
                </div>
        </div>
            )
        }
        </div>
        </>:null
    )
}