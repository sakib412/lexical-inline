import { useState } from "react";
import Editor from "./Lexical/Editor"
import { createPortal } from "react-dom";

function App() {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <>

      <h1>inside iframe floating toolbar not working</h1>



      <iframe title="iframe" ref={setContentRef}>
        {mountNode && createPortal(<Editor />, mountNode)}
      </iframe>

      <h4> outside iframe working fine</h4>
      <Editor />





      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
