import { useDispatch, useSelector } from "react-redux";
import { updateComments, deleteComments } from "../../../../store/favorite";

import "./ButtonAction.css";
export default function ButtonAction({ id }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="select-box">
        <div className="select-box__current" tabIndex={1}>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id={0}
              defaultValue={1}
              name="Ben"
              defaultChecked="checked"
            />
            <i claclassNamess="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <ul className="select-box__list">
          <li>
            <label className="select-box__option" htmlFor={0} aria-hidden="aria-hidden">
              <i className="fa-solid fa-pen-to-square"></i>
            </label>
          </li>
          <li onClick={() => dispatch(deleteComments(id))}>
            <label className="select-box__option" htmlFor={1} aria-hidden="aria-hidden">
              <i className="fa-solid fa-trash-can"></i>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
