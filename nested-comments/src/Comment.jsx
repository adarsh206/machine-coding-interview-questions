import React from 'react'

const Comment = ({ comment, addReply}) => {
  return (
    <li key={comment.id} className='comment-line'>
        {comment.display}
    </li>
  )
}

export default Comment