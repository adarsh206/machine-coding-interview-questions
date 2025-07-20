
import { useState } from 'react'
import './App.css'
import Comment from './Comment';

function App() {

  const [input, setInput] = useState('');
  const [comments, setComments] = useState([
        {
            id: 1,
            display: 'Hello',
            children: [
                {
                    id: 10,
                    display: 'Very nice',
                    children: [
                        {
                            id: 11,
                            display: 'Awesome :)',
                            children: [
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            display: 'Amazing',
            children: []
        }
    ])
  
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const newComment = (text) => {
    return {
      id: new Date().getTime(),
      display: text,
      children: []
    }
  }

  const handleNewComment = (e) => {
    if(input){
      setComments([...comments, newComment(input)]);
      setInput('');
    }
  }

  const addReply = (parentId, text) => {
    console.log('----App----', parentId, text);
    const copyComments =  [...comments];
    addComments(copyComments, parentId, text);
  }

  const addComments = (comments, parentId, text) => {

    for(let i = 0; i < comments.length; i++){
      let comment = comments[i];
      if(comment.id === parentId){
        console.log('----found object', parentId, text);
        comment.children.unshift(newComment(text));
      }
    }

    {/** Going for nested check parent and children */}
    for(let i = 0; i < comments.length; i++){
      let comment = comments[i];
      console.log('---- children -parentId ----', parentId);
      addComments(comment.children, parentId, text);
    }
  }

  return (
  <div className='App'>
   <h1>Nested Comments</h1>
   {/** input box */}
   <div>
      <input type='text' placeholder='Write Your Comments...' className='input-box'
      onChange={handleInputChange} value={input}/>
   </div>

   {/** Handle Button */}
   <div>
    <button className='comment-button' onClick={handleNewComment}>Comment</button>
   </div>

   {/** Nested Comments */}
   <div className='comments'>
    {
      comments.map((item) => (
        <Comment key={item.id} comment={item} addReply={addReply}/>
      ))
    }
   </div>
  </div>
  )
}

export default App
