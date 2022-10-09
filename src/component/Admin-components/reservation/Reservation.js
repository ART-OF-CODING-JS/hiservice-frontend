import "./reservation.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';

import EditReservation from "./EditReservation";
import Pagination from "../../pagenation/Pagination";
import { getAllReservation } from "../../../store/reservations";
import DeleteReservation from "../../Reservation/MyReservation/DeleteReservation/DeleteReservation";


ChartJS.register(ArcElement, Tooltip, Legend);





export default function Reservation(props) {
  const dispatch = useDispatch();
  const { allReservation } = useSelector((state) => state.reserveSlice);
  const { allServices } = useSelector((state) => state.servicesSlice);




  const count = allReservation.filter(item => item.status === null)
  const count2 = allReservation.filter(item => item.status === 'confirm')
  const count3=allReservation.filter(item=>item.status==="reject")
 

   const data = {
    labels: ['Confirm', 'Bending', 'Rejected'],
    datasets: [
      {
        label: '# of Votes',
        data: [count2.length, count.length, count3.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
  const data1 = [
    {
      name: 'Confirmed',
      uv: count2.length,
    
    },
    {
      name: 'Bending',
      uv: count.length,
    
    },
    {
      name: 'Rejected',
      uv: count3.length,
     
    },
  
  ];



  

  useEffect(() => {
    dispatch(getAllReservation());
  }, [dispatch]);
console.log(allReservation,'1111111111')








  ///////////pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPerPage] = useState(4);
  const indexOfLastRecord = currentPage * postsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
  const currentRecords = allReservation.slice(indexOfFirstRecord, indexOfLastRecord);
  return (
    <>
<h2> Chart for services status </h2>
<div className="chart">
<Pie  data={data} />

    <BarChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="uv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
      <section className="myservice-container container-com">
        {currentRecords.map((reservation, indx) => (
          <div className="t" key={indx}>
            <div className="my_services_body">
              <div className="container-my-services">
                <div className="card_img">
                  {allServices
                    .filter((ele) => ele.id === reservation.serviceID)
                    .map((ele) => (
                      <img src={ele.image} alt="" />
                    ))}
                  <div className="info">
                    <div className="edit-myservice common-edi-del">
                      <DeleteReservation reserveId={reservation.id} />
                      <EditReservation reserveId={reservation.id} />
                    </div>
                  </div>
                </div>

                <div className="container__text">
                  {allServices
                    .filter((service) => service.id === reservation.serviceID)
                    .map((service) => (
                      <h1>{service.title}</h1>
                    ))}

                  <div className="container__text__star">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                  </div>

                  <div className="container__text__timing_time">
                    <h2>description</h2>
                    {allServices
                      .filter((service) => service.id === reservation.serviceID)
                      .map((service) => (
                        <p>{service.description}</p>
                      ))}
                  </div>

                  <div className="container__text__timing_time">
                    <h2>department</h2>
                    {allServices
                      .filter((service) => service.id === reservation.serviceID)
                      .map((service) => (
                        <h5>{service.department}</h5>
                      ))}
                  </div>

                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>Time</h2>
                      <p>{reservation.time}</p>
                    </div>
                    <div className="container__text__timing_time">
                      <h2>Date</h2>
                      <p>{reservation.date.substring(0, 10)}</p>
                    </div>
                  </div>
                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2>Note</h2>
                      <p>{reservation.description}</p>
                    </div>
                  </div>
                  <button
                    className={
                      reservation.status === null
                        ? "btn_my_services ra"
                        : reservation.status === "confirm"
                        ? "btn_my_services con"
                        : "btn_my_services rej"
                    }
                  >
                    {reservation.status === null
                      ? "inProgress"
                      : reservation.status === "reject"
                      ? "Rejected"
                      : "Active"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Pagination
        recordsPerPage={postsPerPage}
        totalPosts={allReservation.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
