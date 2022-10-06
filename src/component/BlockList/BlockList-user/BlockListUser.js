import "./BlockListUser.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UnBlockProvider from "./Unblock/UnBlock_User";
import { getBlockList_user } from "../../../store/block";

export default function BlockListUser(props) {
  const dispatch = useDispatch();
  const { blockListUser } = useSelector((state) => state.blockSlice);
  useEffect(() => {
    dispatch(getBlockList_user());
  }, [dispatch]);

  return (
    <div>
      <div className="image-all-section">
        <img alt="h" src="https://i.postimg.cc/4xy3GNqm/pexels-digital-buggu-171198.jpg" />
        <p>Block List</p>
      </div>
      <section className="block-list-user-container">
        <div className="block-list-container-com">
          {blockListUser.map((ele) => (
            <div className="block-list-container" key={ele.id}>
              <div className="block-list-card">
                <div className="block-list-card-header">
                  {ele.image !== null ? (
                    <img className="block-list-img" alt="imageServiceProvider" src={ele.image} />
                  ) : (
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
                      className="block-list-img"
                      alt="imageServiceProvider"
                    />
                  )}
                </div>
                <div className="block-list-username">
                  <span className="block-list-tag">{ele.username}</span>
                </div>

                <div className="block-list-card-body">
                  <h5 className="block-list-user-info">{ele.professions}</h5>
                  <h5 className="block-list-user-info">{ele.phoneNumber}</h5>
                  <h5 className="block-list-user-info">{ele.email}</h5>
                </div>

                <div className="unblock-list-unblock-btn">
                  <UnBlockProvider providerID={ele.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
