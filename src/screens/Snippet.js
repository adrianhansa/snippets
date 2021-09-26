import React from "react";
import { Link } from "react-router-dom";

const Snippet = ({ snippet, deleteSnippet }) => {
  return (
    <div>
      <h3>{snippet.title}</h3>
      <button onClick={() => deleteSnippet(snippet._id)}>Delete Snippet</button>
      {snippet.description && <p>{snippet.description}</p>}
      {snippet.code && (
        <pre>
          <code>{snippet.code}</code>
        </pre>
      )}
      <Link to={`/snippets/${snippet._id}`}>Edit</Link>
    </div>
  );
};

export default Snippet;
