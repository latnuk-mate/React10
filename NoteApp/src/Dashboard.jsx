import { signOut } from 'firebase/auth'
import { auth, db, noteCollection } from '../firebase'
import NoteSlide from './NoteSlide';
import Action from './Action';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import { addDoc, doc, getDocs, setDoc  } from 'firebase/firestore';


function Dashboard({user, setReady}) {
    const notelist = [];
    const [notes, setNotes] = useState([]);
    const [currentId, setCurrentId] = useState(notes[0]?.id || "");
    const [text, setText] = useState("");
    const [showEditor, setShowEditor] = useState(false);


useEffect(function(){
        
    async function fetchDocs() {

        try {
            const snapData = await getDocs(noteCollection);
            snapData.forEach((doc)=>{
                notelist.push({id: doc.id , ...doc.data()});
            })
                setNotes(notelist);
             } catch (err) {
                console.log(err.message)
            }   
        }

        fetchDocs();
        
    }, [])

    console.log(notes)
    const currentNote = notes.find(note => note.id === currentId ) || notes[0];

    useEffect(function(){
        if(currentNote){
          setText(currentNote.body)
        }
    }, [currentNote]);



    function SignOutGoogle(){
        signOut(auth).then(()=>{
            alert('sign out successfully!');
            setReady(false)
        }).catch(err => {
            console.log(err.message)
        })
    }


   async function createNote(){
        const noteFormat = {
            body: "#Create A Note",
            createdAt: Date.now(),
            lastUpdated: Date.now()
          }
      
          try {
            const docRef = await addDoc(noteCollection, noteFormat);
            console.log('document was written successfully with id => ', docRef.id);
               setCurrentId(docRef.id);
               setShowEditor(true)
        } 
        catch (error) {
            console.error(error)
        } 
    }

    async function saveNote(){
        try {
            const docRef = doc(db, "noteapp", currentId);
            await setDoc(docRef, { body: text, lastUpdated: Date.now()}, { merge: true });
            setShowEditor(false)
        } catch (error) {
                console.log(error.message)
        }
    }

  return (
    <div className='mt-24 mx-auto block shadow-md bg-gray-100 w-full lg:w-2/3 px-10 py-3 pb-8'>
            <div className="flex items-center justify-between md:px-10">
                <h5 className='text-4xl dancing--script text-amber-600'>PenNotes</h5>
                <div className="flex items-center gap-6">
                    <h5 className='text-gray-600 text-lg hidden md:block'>{user.displayName}</h5>
                            <img src={user.photoURL} alt="google user"
                             width={30} height={30} className='rounded-full border border-gray-400'/> 
                    <button title='Sign Out' onClick={SignOutGoogle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"/>
                    </svg>
                 </button>
                </div>
            </div>

        {/* menubar section is done! */}

        {showEditor && (
            <Editor
            note={text}
            updateNote={setText}
            setShowEditor={setShowEditor} 
            saveNote={saveNote}
            />
        )}

        {!showEditor && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 mb-6">
        <NoteSlide />
        <Action createNote={createNote} />
        </div> 
        )}

</div>
  )
}

export default Dashboard