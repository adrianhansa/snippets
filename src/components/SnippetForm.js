import React from "react";

const SnippetForm = ({ props }) => {
  return (
    <div>
      <>
        <input
          type="text"
          placeholder="title"
          value={props.values.title}
          onChange={props.handleChange("title")}
        />
        <br />
        <input
          type="text"
          placeholder="description"
          value={props.values.description}
          onChange={props.handleChange("description")}
        />
        <br />
        <textarea
          placeholder="type your code here"
          onChange={props.handleChange("code")}
          value={props.values.code}
        ></textarea>
        <button onClick={props.handleSubmit}>Save Snippet</button>
      </>
    </div>
  );
};

export default SnippetForm;
