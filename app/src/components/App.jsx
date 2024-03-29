import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);


    function addNote(newNote){
       
        setNotes( (prevNotes)=>{
            return([...prevNotes, newNote]);
        })
        
    }
    function deleteNotes(id){
        setNotes( (prevNotes)=>{
            return (
                prevNotes.filter( (noteItem, index)=>{
                    return index !== id;
                })
            )
        })
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
     {notes.map( (eachNote, index) =>{
        return (
            <Note 
            key={index} 
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNotes}
        />
        )
     })}
      

      
      <Footer />
    </div>
  );
}

export default App;
