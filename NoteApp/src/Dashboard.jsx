import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import NoteSlide from './NoteSlide';
import Action from './Action';
import { useContext, useEffect, useState } from 'react';
import Editor from './Editor';
import { addDoc, collection, deleteDoc, doc, onSnapshot, setDoc  } from 'firebase/firestore';
import { NoteProvider } from './NoteContext';
import Flash from './Flash';



function Dashboard({setFlashText, setBgColor, setTextColor, flashText, textColor, animateBorder, bgColor}) {
    let notesCollection;
    const [notes, setNotes] = useState([]);
    const [currentId, setCurrentId] = useState(notes[0]?.id || "");
    const [text, setText] = useState("");
    const [showEditor, setShowEditor] = useState(false);
    const [title, setTitle] = useState("")

    const {user, setUser, flash, setFlash} = useContext(NoteProvider);


        let userId = user.uid;
        notesCollection = collection(doc(db, 'users', userId), 'notes'); 

             //   setting up a listener for data manipulation..
             useEffect(()=>{
                const unSub = onSnapshot(notesCollection , (snap)=>{
                const notelist = snap.docs.map((doc)=>
                    ({id: doc.id , ...doc.data()})
                );

                setNotes(notelist);

                }); 
                
                return unSub;
            }, []); 




// getting the current selected note..
const currentNote = notes.find(note => note.id === currentId ) || notes[0];

    useEffect(function(){
            if(currentNote){
                setTitle(currentNote.title)
                setText(currentNote.body)
            } 
        }
    , [currentNote]);


// logging out...
    function SignOutUser(){
        signOut(auth).then(()=>{
            alert('Your are logged out!')
            setUser(null);

        }).catch(err => {
            console.log(err.message);
            setFlashText("Something error occured! Please try later")
            setBgColor("#dc2626")
            setTextColor("#fafafa")
            setFlash(true);
        })
    }


   async function createNote(){
        const noteFormat = {
            title: "",
            body: "#Write Your First Note...",
            createdAt: Date.now(),
            lastUpdated: Date.now()
          }
      
          try {
            const docRef = await addDoc(notesCollection, noteFormat);
               setCurrentId(docRef.id);
               setShowEditor(true)
        } 
        catch (error) {
            console.error(error);
            setFlashText("Something error occured! Please try later")
            setBgColor("#dc2626")
            setTextColor("#fafafa")
            setFlash(true);
        } 
    }

    async function saveNote(){
        try {
            if(text !== currentNote.body){
                const docRef = doc(notesCollection, currentId);
                await setDoc(docRef, {title: title, body: text, lastUpdated: Date.now()}, { merge: true });
            }
                setShowEditor(false)
        } catch (error) {
                console.log(error.message);
                setFlashText("Something error occured! Please try later")
                setBgColor("#dc2626")
                setTextColor("#fafafa")
                setFlash(true);
        }
    }


    async function deleteNote(id){
        try {
            const docRef = doc(notesCollection, id);
            await deleteDoc(docRef); 
        } catch (error) {
                console.error(error.code)
                setFlashText("Something error occured! Please try later")
                setBgColor("#dc2626")
                setTextColor("#fafafa")
                setFlash(true);
        }
      }

  return (
    <>
         {
        (flash) &&(
            <Flash
            onFlash={setFlash} 
            animateBorder={animateBorder} 
            text={flashText}
            bgColor={bgColor}
            textColor={textColor}
            />
        )
    }
    
  <div className='mt-24 mx-auto block shadow-sm shadow-primary--color w-full lg:w-2/3 px-10 py-3 pb-8'>
                <div className="flex items-center justify-between md:px-10 text-primary--color">
                    <h5 className='text-4xl dancing--script text-secondary--color'>PenNotes</h5>
                    <div className="flex items-center gap-6">
                        <h5 className='text-gray-600 text-lg hidden md:block'>
                            {user.displayName ? user.displayName : "New User"}
                        </h5>
                            <img 
                                src={user.photoURL? user.photoURL : "/icon.svg" } alt="google user"
                                 width={30} height={30} className='rounded-full border border-gray-400'/> 
                        <button title='Sign Out' onClick={SignOutUser}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
                            <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"/>
                        </svg>
                     </button>
                    </div>
                </div>
    
            {/* menubar section is done! */}
    
            {showEditor && (
                <Editor
                note={text}
                setText={setText}
                setShowEditor={setShowEditor} 
                saveNote={saveNote}
                title={title}
                setTitle={setTitle}
                />
            )}
    
            {!showEditor && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 mb-6">
            <NoteSlide notes={notes.sort((a, b) => b.lastUpdated - a.lastUpdated)}
                deleteNote={deleteNote} 
                setShowEditor={setShowEditor} 
                setCurrentId={setCurrentId}
            />
            <Action createNote={createNote} />
            </div> 
            )}
    
        </div>
        </>
    

  )
}

export default Dashboard;