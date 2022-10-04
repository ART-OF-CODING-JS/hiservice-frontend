import { useDispatch, useSelector } from "react-redux";
import { getComments, addComments } from "../../../store/favorite";
import { decodeToken } from "react-jwt";
import cookie from "react-cookies";
import "./Comments.css";
import { useEffect, useRef } from "react";
import DeleteComment from "./ButtonAction/ButtonAction";
import ButtonAction from "./ButtonAction/ButtonAction";
// import { getAllUser } from "../../../store/users";
export default function Comments({ serviceId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const { comments } = useSelector((state) => state.favSlice);
  const { userInfo } = useSelector((state) => state.usersSlice);
  const user_comment = decodeToken(cookie.load("token"));
  const commentsRef = useRef(null);
  // let countComment = 0
  //   comments.filter((ele)=>{
  //     ele.serviceID === serviceId
  //     return countComment++
  // })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      comment: commentsRef.current.value,
      userID: user_comment.id,
      serviceID: serviceId,
    };
    console.log(data);
    dispatch(addComments(data));
    commentsRef.current.value = null;
  };
  return (
    <>
      <section className="content-item" id="comments">
        <div className="container">
          <div className="row_comment">
            <div className="col-sm-8__">
              <form onSubmit={handleSubmit}>
                <div className="new_sumb">
                  <div className="new_comment">
                    <h3 className="pull-left">New Comment</h3>
                  </div>
                  <button type="submit" className="">
                    Add
                  </button>
                </div>

                <fieldset>
                  <div className="user-comments">
                    <div className="col-sm-3 col-lg-2 hidden-xs">
                      {user_comment.image ? (
                        <img
                          className="img-responsive"
                          alt="Your-images"
                          src={user_comment.image}
                        />
                      ) : (
                        <img
                          className="img-responsive"
                          alt="dummy-img"
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        />
                      )}
                    </div>
                    <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your message"
                        required=""
                        defaultValue={""}
                        ref={commentsRef}
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
              <h3>4 Comments</h3>

              {comments
                .filter((ele) => ele.serviceID === serviceId)
                .map((ele) => (
                  <>
                    {userInfo
                      .filter((ele_user) => ele_user.id === ele.userID)
                      .map((elem) => (
                        <div className="media edit_bot_com">
                          <a className="pull-left">
                            {!elem.image ? (
                              <img
                                className="media-object"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                              />
                            ) : (
                              <img
                                className="media-object"
                                src={elem.image}
                                alt=""
                              />
                            )}
                          </a>
                          {/* <div> */}
                          <div className="action_info">
                            <div className="delete__comment">
                                {console.log(ele.userID === cookie.load('userID'))}
                            {ele.userID === parseInt(cookie.load('userID')) ? <ButtonAction id={ele.id}/>
                            :null}
                           
                            </div>
                          <div className="media-body">
                            <h4 className="media-heading">{elem.username}</h4>

                            <p className="comment_text">{ele.comment}</p>
                            <ul className="list-unstyled list-inline media-detail pull-left">
         
                              <li>
                                <i className="fa fa-thumbs-up" />
                                13
                              </li>
                            </ul>
                            <ul className="list-unstyled list-inline media-detail pull-right">
                              {/* <li className="">
                                <a href="">Like</a>
                              </li> */}
                              {/* <li className="">
                                <a href="">Reply</a>
                              </li> */}
                            </ul>
                          </div>
                          </div>
                        </div>
                      ))}
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
