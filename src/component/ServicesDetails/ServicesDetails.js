import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneService } from "../../store/services";
import MainService from "./Main Service/MainService";
import SuggestServices from "./Suggest service/SuggestServices";
import { Spinner } from "react-bootstrap";

export default function ServiceDetails(props) {
  const { oneService, isLoading, error } = useSelector((state) => state.servicesSlice);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneService(id));
  }, [dispatch, id]);
  return (
    isLoading?<div className="spinner-service" ><Spinner animation="border" variant="dark" /></div>:  <>
      <MainService oneService={oneService} />
      <SuggestServices SuggestServ={oneService} />
    </>
  );
}
