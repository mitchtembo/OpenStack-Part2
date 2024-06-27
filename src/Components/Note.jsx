const Note = (props) => {
    const {notes} = props;
    const results = notes.map(note => <li key={note.id}>{note.content}</li>);
   
   console.log(results)
     return(<>
         {results}
     </>)
   }

   export default Note;