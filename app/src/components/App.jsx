import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);


    function addNotes(newNote){
       
        setNotes( (prevValues)=>{
            return([...prevValues, newNote]);
        })
        

    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
     {notes.map( (eachNote, index) =>{
        return (
            <Note 
            key={index} 
            title={eachNote.title}
            content={eachNote.content}
        />
        )
     })}
      

      
      <Footer />
    </div>
  );
}

export default App;
