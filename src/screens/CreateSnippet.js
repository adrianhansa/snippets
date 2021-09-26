import React from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import SnippetForm from "../components/SnippetForm";

const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  code: yup.string().required(),
});

const CreateSnippet = ({ hideForm, getSnippets }) => {
  const createSnippet = async (values) => {
    await axios.post("http://localhost:5000/snippets", values);
    hideForm();
    getSnippets();
  };
  return (
    <div>
      <h3>Create Snippet</h3>
      <Formik
        initialValues={{ title: "", description: "", code: "" }}
        onSubmit={(values) => createSnippet(values)}
        validationSchema={validationSchema}
      >
        {(props) => <SnippetForm props={props} />}
      </Formik>
    </div>
  );
};

export default CreateSnippet;
