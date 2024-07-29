import Split from 'react-split'
import Sidebar from './Sidebar'
import Editor from './Editor'
import './App.css'
import { useEffect, useState } from 'react'
import shortId from 'shortid'

function App() {
 
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [currentId, setCurrentId] = useState((notes[0] && notes[0].noteId) || "");


  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])


  function saveNote(){
    const note = {
      noteId : shortId.generate(),
      body: "** Create your first note..!**"
    }
    setNotes(prevNote => {
      return [...prevNote, note]
    });

    setCurrentId(note.noteId);
    
  }

  function updateNote(value){
    setNotes(prevNote => 
      prevNote.map(note => {
        return note.noteId === currentId ? {...note , body: value} : note
      }));
  }

  function currentNote(){
   return notes.find(note => 
    {
      return note.noteId === currentId

     }) || notes[0];
  }

  function deleteNote(){
    setNotes(oldNotes => {
      return oldNotes.filter(note => note.noteId !== currentId)
    });
  }

   return (
    <main>

    { 
    notes.length > 0 ? 
    <Split 
    sizes={[30, 70]}
    direction="horizontal"
    className='flex'
  >
     <Sidebar notes={notes} currentNote={currentNote()} setCurrentId={setCurrentId} deleteNote={deleteNote}/>

      {currentId && notes.length && 
       <Editor updateNote={updateNote} note={currentNote()} saveNote={saveNote}/>
      }  
</Split>
  :
         <div className='flex justify-center items-center flex-col h-[100vh] gap-2'>
            <h5 className='text-3xl font-semibold'>No notes</h5>
            <button className='bg-gray-700 px-4 py-2 rounded-md text-white text-lg' onClick={saveNote}>create one note</button>
        </div>
  }
</main>
)}

export default App
