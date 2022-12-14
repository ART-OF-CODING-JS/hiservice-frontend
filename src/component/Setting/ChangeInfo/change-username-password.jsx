import { Accordion } from "react-bootstrap";

import UpdateUsername from "../change-username/change-username.component";
import UpdatePassword from "../change-password/change-password.component";
import DeleteProfile from "../delete-profile/delete-profile";
export default function ChangeInfo(props) {
  return (
    <div className="container-com">
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Change Username</Accordion.Header>
          <Accordion.Body>
            <UpdateUsername />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Change password</Accordion.Header>
          <Accordion.Body>
            <UpdatePassword />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Delete account</Accordion.Header>
          <Accordion.Body>
            <DeleteProfile />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
