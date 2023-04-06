import React, {useState} from "react";

function CreateArea(props) {
   const [ note , setNote] = useState({
    title:"",
    content:""
    })
    function handleChange(){

    }
  return (
    <div>
      <form>
        <input 
            onChange={handleChange} 
            value={note.title} name="title" 
            placeholder="Title"  />
        <textarea 
            onChange={handleChange} 
            value={note.content} 
            name="content" 
            placeholder="Take a note..." 
            rows="3"  />
        <button 
        
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
