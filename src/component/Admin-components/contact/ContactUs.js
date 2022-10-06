import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllContact } from "../../../store/contact";
import Pagination from "../../pagenation/Pagination";

export default function ContactUs(props) {
  const dispatch = useDispatch();

  const { allContact } = useSelector((state) => state.contactSlice);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allContact.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
      <section className="myservice-container container-com">
        <h1>Contact Us </h1>

        {currentRecords.map((contactUs, idx) => (
          <div className="t" key={idx}>
            <div className="my_services_body">
              <div className="container-my-services">
                <div className="card_img">
                  <img
                    src="https://images.pexels.com/photos/9089222/pexels-photo-9089222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Pancake"
                  />
                  <div className="info">
                    <div className="edit-myservice common-edi-del">
                      {/* <RejectReserve id={contactUs.id} /> */}
                      {/* <ConfirmReserve id={contactUs.id} />{" "} */}
                    </div>
                  </div>
                </div>

                <div className="container__text">
                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>User Name</h2>
                      <h5>{contactUs.username}</h5>
                    </div>
                  </div>

                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>Phone Number</h2>
                      <h5>{contactUs.phoneNumber}</h5>
                    </div>
                    <div className="container__text__timing_time">
                      <h2>Email</h2>
                      <h5>{contactUs.email}</h5>
                    </div>
                  </div>

                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>Message</h2>
                      <h5>{contactUs.description}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allContact.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
