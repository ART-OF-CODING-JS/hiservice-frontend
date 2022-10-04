import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByID } from "../../../../store/users";

export default function ProviderInfo({ useProviderId }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.usersSlice);

  useEffect(() => {
    dispatch(getUserByID(useProviderId));
  }, [useProviderId, dispatch]);

  return (
    <section className="container-serviceProvider">
      {userInfo.map((ele, idx) => (
        <div className="userprovider-item" key={idx}>
          <div className="image-service-provider">
            {ele.image !== null ? (
              <img className="service-pro-image" alt="imageServiceProvider" src={ele.image} />
            ) : (
              <img
                className="service-pro-image"
                alt="imageServiceProvider"
                src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
              />
            )}
          </div>
          <div className="service-provider-info">
            <p>Name: {ele.username}</p>
            <p>Profession: {ele.professions}</p>
            <p>Email: {ele.email}</p>
            <p>Gender: {ele.gender}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
