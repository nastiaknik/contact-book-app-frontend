import React from "react";
import { useSelector } from "react-redux";
import { Contact } from "types/ContactTypes";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilterValue } from "../../redux/filter/selectors";
import { toast } from "react-toastify";
import { useMediaQuery } from "@chakra-ui/react";
import { ContactItem } from "../ContactItem/ContactItem";
import { TableHead } from "./ContactList.styled";

export const ContactList: React.FC = () => {
  const filter: string = useSelector(selectFilterValue);
  const contacts: Contact[] = useSelector(selectContacts);
  const [isWideScreen] = useMediaQuery("(min-width: 558px)");

  const handleFilterContact = (): Contact[] => {
    const filteredContacts: Contact[] = contacts
      .filter(
        (contact: Contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.phone.includes(filter.trim())
      )
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );

    if (filter && filteredContacts.length === 0) {
      toast.error(
        <p>
          Sorry, there are no contact matching
          <span style={{ color: "red" }}> {filter}</span>!
        </p>,
        {
          toastId: "dont-duplicate-pls",
        }
      );
    }

    return filteredContacts;
  };

  return (
    <table>
      <thead>
        <tr>
          <TableHead>
            {contacts.length}
            {isWideScreen && (
              <span> {contacts.length === 1 ? "contact" : "contacts"}</span>
            )}
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Number</TableHead>
          <TableHead />
        </tr>
      </thead>
      <tbody>
        {handleFilterContact().map((contact: Contact) => (
          <ContactItem key={contact._id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
};
