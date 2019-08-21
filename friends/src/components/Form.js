import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";


function LoginForm() {
  
const [state, setState] = useState({ name: '', email: '', age: ''})
return (
      <Form>
      <Field type="name" name="name" placeholder="Name" />

      <Field type="email" name="email" placeholder="Email" />
      <Field type="age" name="age" placeholder="Age" />
      <button>Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({name, email, age }) {
    return {
        name: name || "",
      email: email || "",
      age: age || ""
    };
  },

  handleSubmit(values) {
    console.log(values)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', values)
            .then(res => {
                console.log('res.data', res.data)
                })
            
      }
          })(LoginForm);

export default FormikLoginForm;