import {useState, useRef } from "react"

function ImageDrop() {

    const [state, setState] = useState();
    const inputElement = useRef();

    function onDrop(e) {
      e.stopPropagation();
      e.preventDefault();

      let dt = e.dataTransfer
      let files = dt.files

      setState(files[0])
      inputElement.current.files = files
    }

    function onDragEnter(e){
      e.stopPropagation();
      e.preventDefault();
    }
    function onDragOver(e){
      e.stopPropagation();
      e.preventDefault();
    }
    function changeFile(e)
    {
      e.preventDefault();
      setState(e.target.files[0])
    }

    function checkFile(e){
      e.preventDefault()
      console.log(state)
    }

    return (
      <div className='base'>
          <h1>Upload image</h1>
          <div 
            className='drop-zone'
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            onDrop={onDrop}>

            <span className="drop-title">Drop image here</span>
            or
            <input ref={inputElement} type="file" id="save-file" accept=".png, .jpeg" onInput={changeFile}></input>
          </div>
          <button onClick={checkFile}>check</button>
      </div>

    )
}

export default ImageDrop;
