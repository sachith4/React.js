import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteStuff) => (
        <Note
          key={noteStuff.key}
          title={noteStuff.title}
          content={noteStuff.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
