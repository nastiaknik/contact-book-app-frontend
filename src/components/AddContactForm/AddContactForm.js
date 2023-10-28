import { Formik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
import { BsFillPersonPlusFill, BsFillTelephonePlusFill } from "react-icons/bs";
import { ContactSchema } from "../../schemas/ContactSchemas";
import { Input } from "../SharedComponents/Input/Input";
import { Button, Form, Title, Wrapper } from "./AddContactForm.styled";

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      phone: values.number,
    };

    const contactExists = contacts.some((item) => {
      return item.name === contact.name;
    });

    if (contactExists) {
      return toast.warning(
        <p>
          Contact <span style={{ color: "orange" }}>{contact.name}</span>{" "}
          already exist!
        </p>
      );
    }

    const numberExists = contacts.some((item) => {
      return item.phone === contact.phone;
    });

    if (numberExists) {
      return toast.warning(
        <p>
          Number <span style={{ color: "orange" }}>{contact.phone}</span> is
          already in base!
        </p>
      );
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
              <Input
                values={props.values}
                handleChange={props.handleChange}
                touched={props.touched}
                errors={props.errors}
                id="name"
                name="name"
                type="text"
                placeholder="Anastasia"
                icon={<BsFillPersonPlusFill size={24} />}
                label="Name"
              />

              <Input
                values={props.values}
                handleChange={props.handleChange}
                touched={props.touched}
                errors={props.errors}
                id="number"
                name="number"
                type="tel"
                placeholder="123 456 789"
                icon={<BsFillTelephonePlusFill size={21} />}
                label="Number"
              />
            </Wrapper>

            <Button type="submit">Add contact</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
