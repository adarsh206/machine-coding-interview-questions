import React, { useState } from 'react'

const Comment = ({ comment, addReply}) => {

    const [showReplybox, setShowReplyBox] = useState(false);

    const handleReply = () => {
        setShowReplyBox(true);
    }
  return (
    <li key={comment.id} className='comment-line'>
        {comment.display}
        {
            !showReplybox && (
                <button className='btn' onClick={handleReply}>Reply</button>
            )
        }
        {/** showReplybox = true */}
        {
            showReplybox ? (
                <>
                    <br />
                    <input type='text'/>
                    <br />
                    <button className='btn'>
                        Save
                    </button>

                    <button className="btn">
                        Cancel
                    </button>
                </>
            ) : null
        }
        {
            comment.children.length ? (
                <ul>
                    {
                        comment.children.map((item) => (
                            <Comment key={item.id} comment={item} addReply={addReply}/>
                        ))
                    }
                </ul>
            ) : null
        }
    </li>
  )
}

export default Comment