import React from "react";

const Snippet = ({ snippet }) => {
  return (
    <div>
      <h3>{snippet.title}</h3>
      {snippet.description && <p>snippet.description</p>}
      {snippet.code && (
        <pre>
          <code>{snippet.code}</code>
        </pre>
      )}
    </div>
  );
};

export default Snippet;
