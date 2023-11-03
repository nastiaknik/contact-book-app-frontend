import React from "react";
import astronaut from "../.././assets/astronaut.png";
import {
  StyledNavLink,
  Wrapper,
  Image,
  ProblemText,
  ErrorStatus,
  ErrorText,
} from "./NotFoundPage.styled";

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <ProblemText>
          Houston, <br /> we have a problem.
        </ProblemText>
        <ErrorStatus>404</ErrorStatus>
        <ErrorText>Page not found</ErrorText>
        <StyledNavLink to="/">Go home</StyledNavLink>
      </div>
      <Image src={astronaut} alt="astronaut" />
    </Wrapper>
  );
};

export default NotFound;
