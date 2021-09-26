import axios from "axios";
import SnippetForm from "../components/SnippetForm";
import { Formik } from "formik";
import * as yup from "yup";

import React, { useEffect, useState } from "react";

const EditSnippet = ({ match, history }) => {
  const [snippet, setSnippet] = useState(null);
  const getSnippet = async (id) => {
    const { data } = await axios.get(`http://localhost:5000/snippets/${id}`);
    setSnippet(data);
  };
  useEffect(() => {
    getSnippet(match.params.id);
    console.log(snippet);
  }, [match.params]);

  const validationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    code: yup.string().required(),
  });

  return (
    <div>
      <h4>Edit Snippet {snippet && snippet.title}</h4>
      {snippet && (
        <Formik
          initialValues={snippet}
          onSubmit={async (values) => {
            await axios.put(
              `http://localhost:5000/snippets/${match.params.id}`,
              values
            );
            history.push("/");
          }}
          validationSchema={validationSchema}
        >
          {(props) => {
            console.log("Props", props);
            return <SnippetForm props={props} />;
          }}
        </Formik>
      )}
    </div>
  );
};

export default EditSnippet;
