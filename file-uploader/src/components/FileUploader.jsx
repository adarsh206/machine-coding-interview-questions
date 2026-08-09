

const FileUploader = () => {

    const handleChange = (e) => {
        console.log(e);
    }
    
  return (
    <div className="file-uploader">
        {/** Drag And Drop Zone */}
        <div className="dropzone">
            <p>Drag and Drop File here or</p>
            <input onChange={handleChange} type="file" multiple className="hidden-input" id="file-input"/>
            <label htmlFor="file-input">Browser Files</label>
        </div>
    </div>
  )
}

export default FileUploader