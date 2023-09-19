import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { FiLogOut } from "react-icons/fi";
import { Wrapper, Username, Button } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Username>
        Welcome, <span>{user.name}</span>
      </Username>
      <Button onClick={() => dispatch(logout(user._id))}>
        <span>Logout</span>
        <FiLogOut size={16} />
      </Button>
    </Wrapper>
  );
};
