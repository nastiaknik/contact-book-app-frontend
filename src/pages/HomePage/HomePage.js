import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import messageImage from "../../assets/message.jpg";
import heartImage from "../../assets/heart.jpg";
import { Loader } from "../../components/Loader/Loader";
import {
  Section,
  Hero,
  Title,
  SubTitle,
  SubText,
  SectionWrap,
  ListTitle,
  SectionTitle,
  Paragraph,
  Image,
  List,
  ListItem,
  ListItemTitle,
  Footer,
  FooterTitle,
  ContactInfo,
  ContactItem,
  SocialMedia,
  SocialMediaItem,
  TextWrapper,
  FooterWrapper,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  StyledNavLink,
} from "./HomePage.styled";

export default function HomePage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Contact Book</title>
      </Helmet>
      <Hero>
        <Title>Stay connected with Contact Book</Title>
        <SubTitle>Manage your contact with ease</SubTitle>
        <StyledNavLink to="/auth/login">Start</StyledNavLink>
      </Hero>
      <Section>
        <SectionWrap className="reverse">
          <Image
            src={messageImage}
            alt="A message symbol made of cards"
            width="400"
          />
          <TextWrapper>
            <SubText>First of all</SubText>
            <SectionTitle>Welcome to Contact Book</SectionTitle>
            <Paragraph>
              Contact Book is a user-friendly application that allows you to
              effortlessly register, login, and organize your private collection
              of contacts. Stay connected, never lose important contact
              information again, and easily access your contacts anytime.
            </Paragraph>
          </TextWrapper>
        </SectionWrap>
      </Section>
      <Section>
        <SectionWrap>
          <TextWrapper>
            <SubText>Not to mention</SubText>
            <SectionTitle>Features</SectionTitle>
            <Paragraph>
              Explore the various features of Contact Book that make it the
              perfect tool for managing your contacts. From organizing your
              address book to easily searching for specific contacts, Contact
              Book has got you covered.
            </Paragraph>
          </TextWrapper>
          <Image
            src={heartImage}
            alt="A heart symbol made by cards"
            width="400"
          />
        </SectionWrap>
      </Section>
      <Section>
        <ListTitle>Our principles</ListTitle>
        <List>
          <ListItem>
            <ListItemTitle>Simplicity</ListItemTitle>
            <Paragraph>
              Our Contact Book is designed to be simple and intuitive, making it
              easy for users to manage their contacts effortlessly.
            </Paragraph>
          </ListItem>
          <ListItem>
            <ListItemTitle>Security</ListItemTitle>
            <Paragraph>
              We prioritize the security and privacy of your contacts. Our app
              ensures secure authentication and protects your personal and
              professional connections.
            </Paragraph>
          </ListItem>
          <ListItem>
            <ListItemTitle>Convenience</ListItemTitle>
            <Paragraph>
              With our Contact Book app, you can access your contacts anytime,
              anywhere. Stay connected and manage your connections with ease.
            </Paragraph>
          </ListItem>
        </List>
      </Section>
      <Section>
        <ListTitle>Stay Organized</ListTitle>
        <Paragraph>
          Contact Book is a reliable and efficient contact management
          application designed to simplify your life. Whether you need to store
          personal or professional contacts, our app provides a secure and
          convenient solution.
        </Paragraph>
        <StyledNavLink to="/auth/login">Start</StyledNavLink>
      </Section>

      <Footer>
        <FooterWrapper>
          <FooterTitle>Contact Us</FooterTitle>
          <Paragraph>We're here to assist you</Paragraph>
        </FooterWrapper>
        <ContactInfo>
          <ContactItem>
            <a href="tel:1234567890">123-456-7890</a>
          </ContactItem>
          <ContactItem>
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </ContactItem>
          <ContactItem>1917 Single Street Quincy, MA 02-169</ContactItem>
        </ContactInfo>

        <SocialMedia>
          <SocialMediaItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/"
            >
              <FacebookIcon />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/"
            >
              <InstagramIcon />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/"
            >
              <TwitterIcon />
            </a>
          </SocialMediaItem>
        </SocialMedia>
      </Footer>
      {isLoading && <Loader />}
    </>
  );
}
