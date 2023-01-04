import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  const [playerQuestions, setPlayerQuestions] = useState([]);
  const client = new QueryClient();

  useEffect(() => {
    if (playerQuestions.length) {
      window.localStorage.setItem(
        "playerQuestionsArr",
        JSON.stringify(playerQuestions)
      );
    }
  }, [playerQuestions]);

  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/upload"
              element={<Upload setPlayerQuestions={setPlayerQuestions} />}
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
