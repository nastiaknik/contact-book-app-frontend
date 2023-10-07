import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilterValue,
} from "../../redux/contacts/selectors";
import { toast } from "react-toastify";
import { useMediaQuery } from "@chakra-ui/react";
import { ContactItem } from "../ContactItem/ContactItem";
import { TableHead } from "./ContactList.styled";

export const ContactList = () => {
  const filter = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);

  const [isWideScreen] = useMediaQuery("(min-width: 558px)");

  const handleFilterContact = () => {
    const noFilteredContacts =
      contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.phone.includes(filter.trim())
        );
      }).length === 0;
    if (filter && noFilteredContacts) {
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

    return contacts
      .filter((contact) => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.phone.includes(filter.trim())
        );
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
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
        <ContactItem contacts={handleFilterContact()} />
      </tbody>
    </table>
  );
};
