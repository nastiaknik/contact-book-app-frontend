import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
import { BiErrorCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  InputContainer,
  Button,
  StyledField,
  Form,
  Error,
  Title,
  FieldContainer,
  IconFieldWrapper,
  Label,
  Wrapper,
} from "./AddContactForm.styled";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(30, "Name is too long!")
    .required("Name is required!")
    .label("Name"),
  number: Yup.string()
    .required("Number is required!")
    .label("Number")
    .matches(/^(\+?\d{1,3}[- ]?)?\d{9}$/, "Please provide a valid number!"),
});

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      phone: values.number,
      email: `${values.name.toLowerCase().replace(/\s/g, ".")}@gmail.com`,
    };

    const contactExists = contacts.some((item) => {
      return item.name === contact.name;
    });
    if (contactExists) {
      toast.warning(
        <p>
          Contact <span style={{ color: "orange" }}>{contact.name}</span>{" "}
          already exist!
        </p>
      );
      return;
    }
    const numberExists = contacts.some((item) => {
      return item.phone === contact.phone;
    });
    if (numberExists) {
      toast.warning(
        <p>
          Number <span style={{ color: "orange" }}>{contact.phone}</span> is
          already in base!
        </p>
      );
      return;
    }
    dispatch(addContact(contact));
    toast.success(
      <p>
        Contact <span style={{ color: "green" }}>{contact.name}</span> added!
      </p>
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {(props) => {
        return (
          <Form>
            <Title>Add contact</Title>
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
                      placeholder="Anastasia Knihnitska"
                      value={props.values.name}
                      onChange={props.handleChange}
                      className={
                        props.touched.name && props.errors.name ? "error" : ""
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

            <Button type="submit">Add contact</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
