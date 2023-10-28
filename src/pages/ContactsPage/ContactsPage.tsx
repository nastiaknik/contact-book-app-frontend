import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";
import { selectContacts } from "../../redux/contacts/selectors";
import { getContacts } from "../../redux/contacts/operations";
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

interface Contact {
  _id: string;
  phone: string;
  name: string;
  favorite: boolean;
}

export default function ContactsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);
  const contacts: Contact[] = useSelector(selectContacts);

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
          {contacts.length > 0 && !isLoading ? (
            <>
              <TitleWrapper>
                <Title>Contacts</Title>
                <ContactFilter />
              </TitleWrapper>
              <ContactList />
            </>
          ) : (
            <Paragraph>
              There is no contacts yet. When you add contacts, they&apos;ll
              appear here.
            </Paragraph>
          )}
          {isLoading && <Loader />}
        </Wrapper>
      </Container>
    </>
  );
}
