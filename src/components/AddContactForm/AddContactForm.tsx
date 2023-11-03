import React from "react";
import { Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
import { Contact } from "types/ContactTypes";
import { BsFillPersonPlusFill, BsFillTelephonePlusFill } from "react-icons/bs";
import { ContactSchema } from "../../schemas/ContactSchemas";
import { Input } from "../SharedComponents/Input/Input";
import { Button, Form, Title, Wrapper } from "./AddContactForm.styled";

interface FormValues {
  name: string;
  number: string;
}

export const AddContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts: Contact[] = useSelector(selectContacts);

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ): void => {
    const contact: { name: string; phone: string } = {
      name: values.name,
      phone: values.number,
    };

    const contactExists = contacts.some((item: Contact) => {
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

    const numberExists = contacts.some((item: Contact): boolean => {
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
      {({ values, handleChange, touched, errors }) => {
        return (
          <Form>
            <Title>Add contact</Title>

            <Wrapper>
              <Input
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                id="name"
                name="name"
                type="text"
                placeholder="Anastasia"
                icon={<BsFillPersonPlusFill size={24} />}
                label="Name"
              />

              <Input
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
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
