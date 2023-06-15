import { StyledNavLink } from "./NotFoundPage.styled";
import Page404 from "../.././assets/404-page.png";

const NotFound = () => {
  return (
    <>
      <img
        src={Page404}
        alt="404 error, you underestimate the power of dark side"
        width={window.innerWidth > 768 ? "548" : "360"}
        height="auto"
        style={{ display: "block", margin: "25px auto" }}
      />
      <StyledNavLink to="/">Go home</StyledNavLink>
    </>
  );
};

export default NotFound;
