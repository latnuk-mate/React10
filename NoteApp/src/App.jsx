import Split from 'react-split'
import Sidebar from './Sidebar'
import Editor from './Editor'
import './App.css'
import { useEffect, useState } from 'react'
import { addDoc, onSnapshot, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { noteCollection, db} from '../firebase'

function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [currentId, setCurrentId] = useState(notes[0]?.id || "");


  useEffect(()=>{
    const unSub = onSnapshot(noteCollection , (snap)=>{
     const notelist = snap.docs.map((doc)=>
          ({id: doc.id , ...doc.data()})
      );

      setNotes(notelist);

    }); 
    return unSub;
  }, []);


  const currentNote = notes.find(note => note.id === currentId ) || notes[0];


  useEffect(function(){
      if(currentNote){
        setText(currentNote.body)
      }
  }, [currentNote]);

  /**
   * Debouncing Logic.
   * useEffect to saving data to the database.
   * use [text] as a dependency..
   * use cleanup for cancelling out any processing delay.
   * if we hit a key before the delayed time, then it will cancel the timer and set it again
   * for the new one..
  */

  useEffect(()=>{
       // after 3 sec it updates the database...
       const timeOutId = setTimeout(async function(){
        // if body text is not changed, we won't update it.
        if(text !== currentNote.body){
          const docRef = doc(db, "noteapp", currentId);
          await setDoc(docRef, { body: text, lastUpdated: Date.now()}, { merge: true })
        }
      }, 3000);

      return ()=> clearTimeout(timeOutId)

  }, [text])



  async function saveNote(){
    const note = {
      body: "#Create A Note",
      createdAt: Date.now(),
      lastUpdated: Date.now()
    }

    try {
      const docRef = await addDoc(noteCollection, note);
      console.log('document was written successfully with id => ', docRef.id);
         setCurrentId(docRef.id);
  } 
  catch (error) {
      console.error(error)
  }  
  }


  async function deleteNote(){
    const docRef = doc(db, "noteapp", currentId);
    await deleteDoc(docRef);
  }

   return (
    <main className='overflow-hidden'>

    { 

    (notes.length > 0) && (
       <Split 
    sizes={[30, 70]}
    direction="horizontal"
    className='flex'
  >
     <Sidebar notes={notes.sort((a,b) => b.lastUpdated - a.lastUpdated)} 
     currentNote={currentNote} setCurrentId={setCurrentId} deleteNote={deleteNote}/>

      <Editor updateNote={setText} note={text} saveNote={saveNote}/>
     
</Split>
    )}

    {
      (notes.length == 0) && (
         <div className='flex justify-center items-center flex-col h-[100vh] gap-2'>
            <h5 className='text-3xl font-semibold'>No notes</h5>
            <button className='bg-gray-700 px-4 py-2 rounded-md text-white text-lg' onClick={saveNote}>create one note</button>
        </div>
      )
    }
  
</main>
)}

export default App
