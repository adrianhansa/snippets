import React from "react";
import { Link } from "react-router-dom";
import "./Snippet.scss";

const Snippet = ({ snippet, deleteSnippet }) => {
  return (
    <div className="snippet">
      <h3 className="title">{snippet.title}</h3>
      {snippet.description && (
        <p className="description">{snippet.description}</p>
      )}
      {snippet.code && (
        <pre className="code">
          <code>{snippet.code}</code>
        </pre>
      )}
      <Link to={`/snippets/${snippet._id}`} className="button">
        Edit
      </Link>
      <button onClick={() => deleteSnippet(snippet._id)} className="button">
        Delete Snippet
      </button>
    </div>
  );
};

export default Snippet;
