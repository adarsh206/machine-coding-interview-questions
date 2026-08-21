import { useState } from "react";

const closeTime = 3000;
const STORY_LIFETIME = 15_000;

const Story = () => {

    const [previewStoriesUrl, setPreviewStoriesUrl] = useState([]);
    const handleChange = (e) => {
  
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        const id = crypto.randomUUID();
        const storyObj = {id: id, imageUrl: imageUrl}
        
        setTimeout(() => {
            setPreviewStoriesUrl((prev) => prev.filter((story) => {
                if(story.id === id) {
                    URL.revokeObjectURL(story.imageUrl);
                }
                else{
                    return true;
                }
            }
        ));
        }, STORY_LIFETIME);

        setPreviewStoriesUrl((prev) => [storyObj, ...prev]);
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
                        <div key={story.id} aria-label="preview-story" className="story-preview">
                            <img src={story.imageUrl} alt="Story preview"/>
                        </div>
                    )
                })
            }

            
        </div>
    </>

  )
}

export default Story


export const Modal = ({ imageSrc }) => {
    return (
        <div className="overlay-modal">
            <img src={imageSrc} alt="Story" />
        </div>
    )
}