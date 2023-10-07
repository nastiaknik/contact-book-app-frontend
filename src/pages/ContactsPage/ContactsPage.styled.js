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
  @media only screen and (min-width: 1020px) {
    padding: 50px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 50px 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  border-radius: 25px;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 0 15px;
  margin: 0 auto 10px;
  max-width: 800px;

  @media only screen and (max-width: 468px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: calc(1.3rem + 1.5vw);
  text-align: center;
  line-height: 1.2;
  padding: 5px 0;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  font-size: calc(1.3rem);
  text-align: center;
  line-height: 1.2;
  margin: 0 auto 25px;
`;
