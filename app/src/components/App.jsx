import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNotes(title, content){
        setNotes( (prevNotes )=>{
            return ( [...prevNotes, {title, content}] )
        } );
        

    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
      {notes.map( (eachNote, index)=>{
        <Note key={index} title={eachNote.title} content={eachNote.content} />
      })}
      <Note key={1} title="Note title" content="Note content" />

      
      <Footer />
    </div>
  );
}

export default App;
