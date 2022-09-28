import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import Contact from "./component/contactus/ContactUs";

import Signin from "./component/Auth/Signin/Signin";
import Header from "./component/Header/Header";
import Services from "./component/Services/Services/Services";
import "react-toastify/dist/ReactToastify.css";
import ServiceDetails from "./component/ServicesDetails/ServicesDetails";
import MyServices from "./component/My Services/MyServices";
import Footer from "./component/footer/footer";
import MyReservation from "./component/Reservation/MyReservation/MyReservation";
import SearchService from "./component/Services/search servics/SearchService";
import BlockListUser from "./component/BlockList/BlockList-user/BlockListUser";
import ReserveMyService from "./component/Reservation/Reserve my service/ReserveMyService";
import Setting from "./component/Setting/Setting";
import Access from "./component/Access/Access";
import Users from "./component/Admin-components/Users/Users";
import ReportAdmin from "./component/Admin-components/Report/Report-admin";

import SearchByCity from "./component/Services/search servics/serachByCity";
import LastNewService from "./component/Services/search servics/LastNewService";
import MostRatedService from "./component/Services/search servics/MostRated";
import ForgetPassword from "./component/Auth/forget-password/forget-password.component";

function App() {
  const { isSignin } = useSelector((state) => state.authSlice);
  console.log(isSignin);
  return (
    <>
      {isSignin ? (
        <>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<h1>Mohamamd</h1>} />
            <Route
              path="/users"
              element={
                <Access role={"admin"}>
                  <Users />
                </Access>
              }
            ></Route>

            <Route path="/Services" element={<Services />} />
            <Route path="/Services/:id" element={<ServiceDetails />} />
            <Route path="/My-Services" element={<MyServices />} />

            <Route path="/Reservation" element={<h1>Mohamamd</h1>} />
            <Route path="/My-Reservation" element={<MyReservation />} />

            <Route path="/reserve/myService" element={<ReserveMyService />} />
            <Route path="//reports-admin" element={<ReportAdmin />} />
            <Route path="/Contact-us" element={<Contact />} />
            <Route path="/Reports" element={<h1>Mohamamd</h1>} />
            <Route path="/Settings" element={<Setting/>} />
            <Route path="/search" element={<SearchService />} />
            <Route path="/searchCity" element={<SearchByCity />} />
            <Route path="/lastNew" element={<LastNewService />} />
            <Route path="/mostRated" element={<MostRatedService />} />
            <Route path="/blockList-user" element={<BlockListUser />} />
            <Route path="/services/confirmation" element={<BlockListUser />} />
          </Routes>

          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
