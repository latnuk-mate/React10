
import ReactMde from "react-mde";
import Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import { useState } from "react";


const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });


function Editor({saveNote, note, updateNote, setShowEditor}) {
    const [selectedTab, setSelectedTab] = useState("write");

  return (
  <div className="container bg-gray-100 mt-5 ">

<ReactMde
        value={note}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={40}
        heightUnits="vh"
        className=" text-gray-600"
      />

    <div className="flex gap-5 items-center mt-4 justify-center">
        <button onClick={()=> setShowEditor(false)}
                className="px-5 py-2 bg-gray-400 text-black rounded-md text-lg">
          Back
        </button>
      <button
      className="bg-amber-500 text-black rounded-md text-lg py-2 px-5"
      onClick={saveNote}>Save
      </button>
  </div>


 </div>
  )
}

export default Editor