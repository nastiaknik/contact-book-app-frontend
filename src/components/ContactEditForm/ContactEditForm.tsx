import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { editContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Contact } from "types/ContactTypes";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { ContactSchema } from "../../schemas/ContactSchemas";
import { Modal } from "../Modal/Modal";
import { Input } from "../SharedComponents/Input/Input";
import {
  Form,
  Wrapper,
  Title,
  BtnWrapper,
  Button,
  CancelBtn,
} from "./ContactEditForm.styled";

interface ContactEditFormProps {
  contact: Contact;
  isModalOpen: boolean;
  toggleModal: () => void;
}

interface FormValues {
  name: string;
  number: string;
}

export const ContactEditForm: React.FC<ContactEditFormProps> = ({
  contact,
  isModalOpen,
  toggleModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(selectContacts);

  const handleEditContact = (values: FormValues): void => {
    const name = values.name;
    const phone = values.number;

    const itemsWithoutContact = items.filter(
      (item: Contact) => item !== contact
    );

    const contactExist = itemsWithoutContact.some(
      (contact: Contact) => contact.name === name || contact.phone === phone
    );
    if (contactExist) {
      toast.error(
        <p>
          <span style={{ color: "red" }}>{name}</span> is already in the list!
        </p>
      );
      return;
    }

    if (contact.name === name && contact.phone === phone) {
      toast.warning(
        <p>
          You did not change contact{" "}
          <span style={{ color: "orange" }}>{contact.name}</span>!
        </p>
      );
      return;
    }

    dispatch(editContact({ id: contact._id, contact: { name, phone } }));
    toast.success(
      <p>
        Contact <span style={{ color: "green" }}>{contact.name}</span> saved!
      </p>
    );
    toggleModal();
  };

  return (
    <Modal onClose={toggleModal} isOpen={isModalOpen}>
      <div>
        <Title>Edit the contact</Title>
        <Formik
          initialValues={{
            name: contact.name,
            number: contact.phone,
          }}
          validationSchema={ContactSchema}
          onSubmit={handleEditContact}
        >
          {({ values, handleChange, touched, errors }) => (
            <Form>
              <Wrapper>
                <Input
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                  name="name"
                  id="editName"
                  type="text"
                  placeholder="Anastasia"
                  label="Name"
                />

                <Input
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                  name="number"
                  id="editNumber"
                  type="tel"
                  placeholder="123 456 789"
                  label="Number"
                />
              </Wrapper>

              <BtnWrapper>
                <CancelBtn type="button" onClick={toggleModal}>
                  Close
                </CancelBtn>
                <Button type="submit">Save</Button>
              </BtnWrapper>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
