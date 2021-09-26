import React from "react";

const SnippetForm = ({ props }) => {
  return (
    <div>
      <>
        <input
          type="text"
          placeholder="title"
          value={props.title}
          onChange={props.handleChange("title")}
        />
        <br />
        <input
          type="text"
          placeholder="description"
          value={props.description}
          onChange={props.handleChange("description")}
        />
        <br />
        <textarea
          placeholder="type your code here"
          onChange={props.handleChange("code")}
        >
          {props.code}
        </textarea>
        <button onClick={props.handleSubmit}>Save Snippet</button>
      </>
    </div>
  );
};

export default SnippetForm;
