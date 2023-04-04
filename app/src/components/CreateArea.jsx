import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
    const [ isExpanded, setIsExpanded] = useState(false);
    const [ note , setNote] = useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setNote( (prevValues) => {
            return {
                ...prevValues,
                [name]:value
            }
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    function expand(){
        setIsExpanded(true);
    }
  return (
    <div>
      <form>
       {isExpanded &&  
            <input 
                onChange={handleChange} 
                value={note.title} name="title" 
                placeholder="Title"  

            />
        }
        <textarea 
            onClick={expand}
            onChange={handleChange} 
            value={note.content} 
            name="content" 
            placeholder="Take a note..." 
            rows={isExpanded ? "3" : "1"}  />
       
        <Zoom in={isExpanded}>
            <button onClick={submitNote}>
                <AddIcon/>
            </button>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
