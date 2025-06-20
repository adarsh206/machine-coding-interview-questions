
import './App.css'
import Accordion from './components/Accordion'

function App() {

  const items = [
    {
      title: "Javascript Basics",
      content: "JavaScript is a versatile programming language used for web development, server-side applications."
    },
     {
      title: "ReactJs Overview",
      content: "React is a JavaScript library for building user interfaces, particularly single-page applications."
    },
     {
      title: "NodeJs Introduction",
      content: "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing server-side execution of JavaScript."
    },
     {
      title: "MERN Stack",
      content: "MERN is a full-stack development framework consisting of MongoDB, Express.js, React.js, and Node.js."
    },
     {
      title: "Full Stack Development",
      content: "Full stack development involves working on both the front-end and back-end of web applications, integrating technologies like HTML, CSS, JavaScript, and server-side languages."
    },
  ]

  return (
 <>
  <h1 className='App'>Accordion</h1>
  <Accordion items={items} />
 </>
 

  )
}

export default App
