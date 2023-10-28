import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik } from "formik";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
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

export function ContactEditForm({ contact, isModalOpen, toggleModal }) {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleEditContact = (values, action) => {
    const name = values.name;
    const phone = values.number;

    const itemsWithoutContact = items.filter((item) => item !== contact);

    const contactExist = itemsWithoutContact.some(
      (contact) => contact.name === name || contact.phone === phone
    );
    if (contactExist) {
      return toast.error(
        <p>
          <span style={{ color: "red" }}>{name}</span> is already in the list!
        </p>
      );
    }

    if (contact.name === name && contact.phone === phone) {
      return toast.warning(
        <p>
          You did not change contact{" "}
          <span style={{ color: "orange" }}>{contact.name}</span>!
        </p>
      );
    }

    dispatch(editContact({ id: contact._id, contact: { name, phone } }));
    toast.success(
      <p>
        Contact <span style={{ color: "green" }}>{contact.name}</span> saved!
      </p>
    );
    action.resetForm();
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
          {(props) => (
            <Form>
              <Wrapper>
                <Input
                  values={props.values}
                  handleChange={props.handleChange}
                  touched={props.touched}
                  errors={props.errors}
                  name="name"
                  id="editName"
                  type="text"
                  placeholder="Anastasia"
                  label="Name"
                />

                <Input
                  values={props.values}
                  handleChange={props.handleChange}
                  touched={props.touched}
                  errors={props.errors}
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
}

ContactEditForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
