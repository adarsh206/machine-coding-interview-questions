import { useState } from "react";
import Preview from "./Preview";


const FileUploader = () => {

    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        const selectedFiles = e.target.files;
        setFiles([...files, ...selectedFiles]);
    }

    console.log(files);

    return (
        <div className="file-uploader">
            {/** Drag And Drop Zone */}

            <div className="dropzone">
                <p>Drag and Drop File here or</p>
                <input onChange={handleChange} type="file" multiple className="hidden-input" id="file-input"/>
                <label className="browse-btn" htmlFor="file-input">Browser Files</label>
            </div>

            {/** Preview Zone */}
            <div className="preview-container">
                {files.map((file) => {
                    return <Preview key={file.name} fileDetail={file} />
                } )}
            </div>
        </div>
    )
}

export default FileUploader