import { useState, useEffect } from "react";
import axios from "axios";

import Snippet from "./Snippet";
import CreateSnippet from "./CreateSnippet";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [snippets, setSnippets] = useState([]);
  const getSnippets = async () => {
    const { data } = await axios.get("http://localhost:5000/snippets");
    setSnippets(data);
  };

  const deleteSnippet = async (id) => {
    await axios.delete(`http://localhost:5000/snippets/${id}`);
    getSnippets();
  };
  useEffect(() => {
    getSnippets();
  }, []);
  const hideForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <h1>Snippets Manager</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Create Snippet"}
      </button>
      {showForm && (
        <CreateSnippet hideForm={hideForm} getSnippets={getSnippets} />
      )}
      <div className="snippetList">
        {snippets.length > 0 ? (
          snippets.map((snippet) => {
            return (
              <Snippet
                key={snippet._id}
                snippet={snippet}
                deleteSnippet={deleteSnippet}
              />
            );
          })
        ) : (
          <p>No snippets.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
