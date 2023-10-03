import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { selectContacts } from "../../redux/contacts/selectors";
import { getContacts } from "../../redux/contacts/operations";
import { Helmet } from "react-helmet";
import { ContactList } from "../../components/ContactList/ContactList";
import { AddContactForm } from "../../components/AddContactForm/AddContactForm";
import { ContactFilter } from "../../components/ContactFilter/ContactFilter";
import { Loader } from "../../components/Loader/Loader";
import {
  Container,
  Wrapper,
  TitleWrapper,
  Title,
  Paragraph,
} from "./ContactsPage.styled";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

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
          {contacts.length > 0 ? (
            <>
              <TitleWrapper>
                <Title>Contacts</Title>
                <ContactFilter />
              </TitleWrapper>
              <ContactList />
            </>
          ) : (
            <Paragraph>
              There is no contacts yet. When you add contacts, they'll appear
              here.
            </Paragraph>
          )}
          {isLoading && <Loader />}
        </Wrapper>
      </Container>
    </>
  );
}
