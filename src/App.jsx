import './App.css'
import MessageList from './components/MessageList.jsx'
import { useState } from 'react';
import { Form } from './components/Form';

function App() {      
 const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form refresh={refresh} setRefresh={setRefresh}></Form>
      </div>
      <MessageList refresh={refresh}></MessageList>
    </div>
  )
}

export default App
