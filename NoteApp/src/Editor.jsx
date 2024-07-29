
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


function Editor({saveNote, note, updateNote}) {
    const [selectedTab, setSelectedTab] = useState("write");

  return (
  <div className="container bg-gray-100">

<ReactMde
        value={note?.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
        className=" text-gray-600"
      />
<button className="mt-4 flex m-auto bg-gray-700 text-white rounded-md text-lg py-2 px-3 items-center gap-2" onClick={saveNote}>Create Note
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
 </svg>
</button>

 </div>
  )
}

export default Editor