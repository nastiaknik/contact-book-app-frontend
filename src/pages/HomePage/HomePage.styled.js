import styled from "styled-components";
import image from "../../assets/typing.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  min-width: 100%;
  padding: 20px 32px;
  background-color: #f0f0f0;
  margin: 45px auto;
  background-color: #fff;

  @media screen and (min-width: 320px) {
    max-width: 320px;
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 32px;
  }

  & *::selection {
    background-color: #162731;
    color: #fff;
  }
`;

export const Hero = styled(Section)`
  height: calc(100vh - 80px);
  background-color: #162731;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & *::selection {
    background-color: #fff;
    color: #162731;
  }
`;

export const Title = styled.h2`
  font-size: 60px;
  margin: 0;
  color: white;
  padding: 0 5px;
  border-radius: 5px;
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  margin: 10px 0;
  color: white;
  padding: 0 5px;
  border-radius: 5px;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;

export const SubText = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
`;

export const SectionTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: 400px;
`;

export const ListTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10px;
  text-align: center;
`;
export const ListItem = styled.li`
  padding: 40px;
  background-color: #e1e8ed;
`;
export const ListItemTitle = styled.p`
  font-size: 20px;
  font-weight: 550;
`;

export const Footer = styled.footer`
  background-color: #162731;
  color: #fff;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & *::selection {
    background-color: #fff;
    color: #162731;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterTitle = styled.h3`
  font-weight: 550;
  font-size: 40px;
  padding: 0;
  margin: 0;
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
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;
export const SocialMediaItem = styled.li`
  font-size: 25px;
  color: white;
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
  text-align: center;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 30px;
  margin: 15px auto 0;
  white-space: nowrap;
  outline: 2px solid transparent;
  outline-offset: 2px;
  line-height: 1.2;
  border: none;
  border-radius: 0.375rem;
  background-color: #ecc94b;
  color: #000000;
  cursor: pointer;
  transition: background-color cubic-bezier(0.4, 0, 1, 1) 200ms;
  max-width: 106px;

  &:hover,
  &:focus {
    background: #f6e05e;
  }
`;
