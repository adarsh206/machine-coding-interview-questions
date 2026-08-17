
const closeTime = 3000;
const STORY_LIFETIME = 60_000;

const Story = () => {
  return (
    <>
        <div className="story-row">
            <label className="add-story">+
                <input type="file" hidden />
            </label>

            <div aria-label="preview-story" className="story-preview">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s" alt="story preview"/>
            </div>
        </div>
    </>

  )
}

export default Story