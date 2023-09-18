import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Helmet } from "react-helmet";
import { ContactList } from "../../components/ContactList/ContactList";
import { AddContactForm } from "../../components/AddContactForm/AddContactForm";
import { ContactFilter } from "../../components/ContactFilter/ContactFilter";
import { getContacts } from "../../redux/contacts/operations";
import "react-toastify/dist/ReactToastify.css";
import { Container, Title } from "./ContactsPage.styled";
import { Loader } from "../../components/Loader/Loader";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        <Title>Add new contact</Title>
        <AddContactForm />
      </Container>
      <Container>
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
      </Container>
      {isLoading && <Loader />}
    </>
  );
}
