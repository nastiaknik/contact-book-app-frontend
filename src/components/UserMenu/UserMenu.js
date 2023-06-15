import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { Wrapper, Username } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Username>
        Welcome, <span>{user.name}</span>
      </Username>
      <Button
        rightIcon={<FiLogOut />}
        colorScheme="yellow"
        variant="solid"
        onClick={() => dispatch(logout())}
        /* isLoading={isLoading}
        loadingText="Loading"
        spinnerPlacement="start" */
      >
        Logout
      </Button>
    </Wrapper>
  );
};
