import styled from "styled-components";
import image from "../../assets/typing.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  min-width: 100%;
  max-width: 100vw;
  padding: 0 20px;
  margin: 30px auto;
  background-color: #fff;

  @media only screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 32px;
    margin: 45px auto;
  }

  & *::selection {
    background-color: #162731;
    color: #fff;
  }
`;

export const Hero = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  margin-top: 0;
  text-align: center;
  background-color: #162731;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;

  & *::selection {
    background-color: #fff;
    color: #162731;
  }
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &.reverse {
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;

    &.reverse {
      flex-direction: row;
    }
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding: 0 5px;
  border-radius: 5px;
  color: white;

  @media only screen and (min-width: 468px) {
    font-size: 60px;
    font-weight: 600;
  }
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  border-radius: 5px;
  color: white;

  @media only screen and (min-width: 448px) {
    font-size: 24px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;

  @media only screen and (min-width: 468px) {
    font-size: 18px;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;

  @media only screen and (min-width: 448px) {
    font-size: 32px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: 400px;
  height: auto;
`;

export const ListTitle = styled.h3`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;

  @media only screen and (min-width: 468px) {
    font-size: 32px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  text-align: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;
export const ListItem = styled.li`
  padding: 30px;
  background-color: #e1e8ed;

  @media only screen and (min-width: 448px) {
    padding: 40px;
  }
`;
export const ListItemTitle = styled.p`
  font-size: 20px;
  font-weight: 550;
`;

export const Footer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 20px;
  background-color: #162731;
  color: #fff;

  & *::selection {
    background-color: #fff;
    color: #162731;
  }

  @media only screen and (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
    padding: 30px;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterTitle = styled.h3`
  font-size: 24px;
  font-weight: 550;
  padding: 0;
  margin: 0;

  @media only screen and (min-width: 468px) {
    font-size: 40px;
  }
`;

export const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ContactItem = styled.li`
  font-size: 16px;

  & > a {
    &:hover,
    &:focus {
      color: #1877f2;
    }
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  justify-content: center;

  @media only screen and (min-width: 350px) and (max-width: 447px) {
    position: absolute;
    top: 25px;
    right: 25px;
  }
  @media only screen and (min-width: 448px) and (max-width: 719px) {
    position: absolute;
    top: 25%;
    right: 10%;
  }
  @media only screen and (min-width: 720px) {
    align-items: center;
  }
`;
export const SocialMediaItem = styled.li`
  font-size: 25px;
  color: #ffffff;
  transition: color ease-in 150ms;
`;
export const FacebookIcon = styled(FaFacebook)`
  &:hover,
  &:focus {
    color: #1877f2;
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  &:hover,
  &:focus {
    color: #e1306c;
  }
`;
export const TwitterIcon = styled(FaTwitter)`
  &:hover,
  &:focus {
    color: #1da1f2;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  max-width: 106px;
  padding: 10px 15px;
  margin: 15px auto 0;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  background-color: #fbc02d;
  color: #000000;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color cubic-bezier(0.4, 0, 1, 1) 200ms;

  @media only screen and (min-width: 468px) {
    font-size: 20px;
    padding: 10px 30px;
  }

  &:hover,
  &:focus {
    background-color: #fbc846;
  }
  &:active {
    background-color: #fbc02d;
  }
`;
