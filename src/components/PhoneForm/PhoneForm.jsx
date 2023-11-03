import { Formik, ErrorMessage } from 'formik';
import {
  Field,
  Form,
  FormButton,
  FormContainer,
  FormGroup,
} from './PhoneForm.styled';
import * as Yup from 'yup';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const PhoneForm = ({ onAdd }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onAdd(values);
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" placeholder="Jane" />
            <ErrorMessage name="name" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field name="number" placeholder="+380..." />
            <ErrorMessage name="number" />
          </FormGroup>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
