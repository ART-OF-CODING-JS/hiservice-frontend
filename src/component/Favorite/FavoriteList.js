import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from "react-bootstrap";
import './Favorite.css'
import { getAllServices } from '../../../src/store/services'
import { Link } from 'react-router-dom'
import { removeService } from '../../store/favorite'
export default function FavoriteList({ favId, serviceId }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const { allServices } = useSelector(state => state.servicesSlice)
  useEffect(() => {
    dispatch(getAllServices())
  }, [dispatch])
  function handleRemove(id) {
    console.log(favId, "0000000000this isthe id for removed services")

    dispatch(removeService(id))
  }

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
                  {ele.status === null ? <p className="inProgress stateus-myservice">inProgress</p> : ele.status === "reject" ? <p className="reject stateus-myservice">Rejected</p> : <p className="confirm stateus-myservice">Active</p>}
                  <div className="btns-myService">

                    <div className="delete-myservice common-edi-del">

                      <button onClick={handleShow}> Remove from Favorite</button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Remove from favorite</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="c">
                          <p> Are you sure want to remove this service?</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button className="py-3" variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button className="add-btn" variant="primary" onClick={() => { handleRemove(favId); handleClose() }}>
                            Yes I'm Sure
                          </Button>
                        </Modal.Footer>
                      </Modal>

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