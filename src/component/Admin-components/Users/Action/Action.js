import { Dropdown } from "react-bootstrap";


import './Action.css'
import BlockUser from "./BlockUser/BlockUser";
import DeleteUser from "./DeleteUser/DeleteUser";
export default function Action({isBlocked,id}) {
    return(
        <Dropdown>
        <Dropdown.Toggle variant='warning'>
        <i className="fa-solid fa-ellipsis-vertical"></i>
        </Dropdown.Toggle>
  
        <Dropdown.Menu className='dropdown-action'>
          <Dropdown.Item><DeleteUser id={id}/></Dropdown.Item>
          <Dropdown.Item ><BlockUser id={id} isBlocked={isBlocked}/></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}