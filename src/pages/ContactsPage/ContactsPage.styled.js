import styled from "styled-components";

export const Container = styled.section`
  min-height: calc(100vh - 80px);
  background-color: #f9f8fb;
  margin: 0 auto;
  padding: 40px 20px;

  @media only screen and (min-width: 350px) {
    padding: 40px 25px;
  }
  @media only screen and (min-width: 468px) {
    padding: 50px 30px;
  }
  @media only screen and (min-width: 624px) {
    padding: 50px 50px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 50px 100px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin: 0 auto;
  font-size: 30px;
  border-bottom: 3px solid #cbc3e3;
  padding: 20px;
`;

export const Wrapper = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 25px;
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;
