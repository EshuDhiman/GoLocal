import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TextButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  font-size: inherit;
  text-decoration: none;
`;

function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate("/");
    };

  return (
    <TextButton onClick={handleLogout}>LOGOUT</TextButton>
  );
}

export default LogoutButton;
