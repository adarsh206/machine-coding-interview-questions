import React, { useRef, useState } from 'react'

const Comment = ({ comment, addReply}) => {

    const [showReplybox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState('');
    const inputRef = useRef(null);

    const handleReply = () => {
        setShowReplyBox(true);
        setTimeout(() => {
            inputRef.current.focus();
        }, 1)
    }

    const handleCancelButton = () => {
        setShowReplyBox(false);
        setReplyText('');
    }

    const handleReplySave = (commentId) => {
        console.log('----save----', commentId, replyText)
        addReply(commentId, replyText)
        setShowReplyBox(false);
        setReplyText('');
    }

    const handleKeyDown = (e, commentId) => {
        if(e.key === 'Enter'){
            handleReplySave(commentId);
        }
        else if(e.key === 'Escape'){
            handleCancelButton();
        }
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
                    <input type='text' ref={inputRef} value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, comment.id)}/>
                    <br />
                    <button className='btn' onClick={() => handleReplySave(comment.id)}>
                        Save
                    </button>

                    <button className="btn" onClick={handleCancelButton}>
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