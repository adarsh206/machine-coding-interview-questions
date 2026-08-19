import { useState } from "react";

const closeTime = 3000;
const STORY_LIFETIME = 60_000;

const Story = () => {

    const [previewStoriesUrl, setPreviewStoriesUrl] = useState([]);
    const handleChange = (e) => {
  
        const file = e.target.files[0];
        console.log(file)
        const imageUrl = URL.createObjectURL(file);
        setPreviewStoriesUrl((prev) => [imageUrl, ...prev]);
    }

  return (
    <>
        <div className="story-row">
            <label className="add-story">+
                <input type="file" hidden onChange={(e) => handleChange(e)}/>
            </label>
            {
                previewStoriesUrl.map((story) => {
                    return (
                        <div aria-label="preview-story" className="story-preview">
                            <img src={story} alt="Story preview"/>
                        </div>
                    )
                })
            }

            
        </div>
    </>

  )
}

export default Story