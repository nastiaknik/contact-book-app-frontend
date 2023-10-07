import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { BiErrorCircle } from "react-icons/bi";
import { Modal } from "../Modal/Modal";
import {
  BtnWrapper,
  Button,
  CancelBtn,
  Title,
  Wrapper,
  InputContainer,
  StyledField,
  Form,
  Error,
  FieldContainer,
  IconFieldWrapper,
  Label,
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
      toast.error(
        <p>
          <span style={{ color: "red" }}>{name}</span> is already in the list!
        </p>
      );
      return;
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

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(30, "Name is too long!")
      .required("Name is required!")
      .label("Name"),
    number: Yup.string()
      .required("Number is required!")
      .label("Number")
      .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Please provide a valid number!"),
  });

  return (
    <>
      <Modal onClose={toggleModal} isOpen={isModalOpen}>
        <div>
          <Title>Edit the contact</Title>
          <Formik
            initialValues={{ name: contact.name, number: contact.phone }}
            validationSchema={ContactSchema}
            onSubmit={handleEditContact}
          >
            {(props) => {
              return (
                <Form>
                  <Wrapper>
                    <FieldContainer>
                      <IconFieldWrapper>
                        <label htmlFor="name"></label>
                        <InputContainer>
                          <StyledField
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="Anastasia"
                            value={props.values.name}
                            onChange={props.handleChange}
                            autoFocus
                            className={
                              props.touched.name && props.errors.name
                                ? "error"
                                : ""
                            }
                          />
                          <Label htmlFor="name">Name</Label>
                        </InputContainer>
                      </IconFieldWrapper>
                      <ErrorMessage name="name">
                        {(msg) => (
                          <Error>
                            <BiErrorCircle /> {msg}
                          </Error>
                        )}
                      </ErrorMessage>
                    </FieldContainer>

                    <FieldContainer>
                      <IconFieldWrapper>
                        <label htmlFor="name"></label>
                        <InputContainer>
                          <StyledField
                            id="number"
                            type="tel"
                            name="number"
                            required
                            placeholder="123 456 789"
                            value={props.values.number}
                            onChange={props.handleChange}
                            className={
                              props.touched.number && props.errors.number
                                ? "error"
                                : ""
                            }
                          />
                          <Label htmlFor="number">Number</Label>
                        </InputContainer>
                      </IconFieldWrapper>
                      <ErrorMessage name="number">
                        {(msg) => (
                          <Error>
                            <BiErrorCircle /> {msg}
                          </Error>
                        )}
                      </ErrorMessage>
                    </FieldContainer>
                  </Wrapper>

                  <BtnWrapper>
                    <CancelBtn type="button" onClick={toggleModal}>
                      Close
                    </CancelBtn>
                    <Button type="submit">Save</Button>
                  </BtnWrapper>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    </>
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
