import cookie from "react-cookies";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
  const navigate = useNavigate();
  const handleSignout = async () => {
    await cookie.remove("token");
    await cookie.remove("actions");
    await cookie.remove("userAccess");
    await cookie.remove("userID");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <Button className="mx-4" variant="dark" onClick={handleSignout}>
        Logout
      </Button>{" "}
    </>
  );
}
