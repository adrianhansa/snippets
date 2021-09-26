import { useState, useEffect } from "react";
import axios from "axios";

import Snippet from "./Snippet";

const Home = () => {
  const [snippets, setSnippets] = useState([]);
  const getSnippets = async () => {
    const { data } = await axios.get("http://localhost:5000/snippets");
    setSnippets(data);
  };
  useEffect(() => {
    getSnippets();
  }, []);
  return (
    <div>
      <h1>Snippets Manager</h1>
      <div className="snippetList">
        {snippets.length > 0 ? (
          snippets.map((snippet) => {
            return <Snippet snippet={snippet} />;
          })
        ) : (
          <p>No snippets.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
