import "./ServiceInfo.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllServices } from "../../../../store/services";

export default function ServiceInfo({ serviceId }) {
  const dispatch = useDispatch();
  const { allServices } = useSelector((state) => state.servicesSlice);
  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);
  return (
    <>
      {allServices
        .filter((ele) => ele.id === serviceId)
        .map((ele) => (
          <div className="" key={ele.id}>
            <div className="service_cards">
              <div className="cards_my_service">
                <h2 className="card_title_service">Title</h2>
                <img src={ele.image} alt="" />
                <p className="card-desc">{ele.title}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
