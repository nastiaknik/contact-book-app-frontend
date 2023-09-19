import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { getContacts } from "../../redux/contacts/operations";
import { Helmet } from "react-helmet";
import { ContactList } from "../../components/ContactList/ContactList";
import { AddContactForm } from "../../components/AddContactForm/AddContactForm";
import { ContactFilter } from "../../components/ContactFilter/ContactFilter";
import { Loader } from "../../components/Loader/Loader";
import { Title, Container, Wrapper } from "./ContactsPage.styled";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Container>
        <Wrapper>
          <AddContactForm />

          <Title
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "20px",
              margin: "0 auto",
              justifyContent: "end",
              alignItems: "baseline",
            }}
          >
            Search contacts
            <ContactFilter />
          </Title>
          <ContactList />
          {isLoading && <Loader />}
        </Wrapper>
      </Container>
    </>
  );
}
