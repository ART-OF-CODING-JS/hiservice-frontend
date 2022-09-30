import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './SearchService.css'
import { getAllServices } from '../../../store/services'
import { Link } from 'react-router-dom'

export default function MostRatedList({ serviceId }) {

 
  const dispatch = useDispatch()
  const { allServices } = useSelector(state => state.servicesSlice)
  useEffect(() => {
    dispatch(getAllServices())
  }, [dispatch])


return (
    <>
      <section className="myservice-container container-com">
        {

          allServices.filter(ele => ele.id === serviceId).map((ele) => (
            <div className="t" key={ele.id}>
              <div className="myservice-card">
                <div className="image-myservice">
                  <Link to={`/Services/${ele.id}`}>
                    <img className="img-myservice" alt="service" src={ele.image} />
                  </Link>
                </div>
                <div className="card-info-myservice">
                  <p className="title">{ele.title}</p>
                  <p className="city">{ele.city}</p>
                  <p className="department">{ele.department}</p>
                
                  <div className="btns-myService">

                    <div className="delete-myservice common-edi-del">


                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </>

  )
    }