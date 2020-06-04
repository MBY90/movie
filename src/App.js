import React ,{useState} from 'react';
import './App.css';
import Container from './Components/Container';
import Modal from 'react-modal'

Modal.setAppElement('#root')


function App() {

  const [modalIsOpen,setmodalIsOpen] = useState(false)
  const [filmData, setFilmData] =  useState({name:'',rating:''})
  return (
   <div>
     <Container /> 
     <Modal isOpen={modalIsOpen} onRequestClose={()=>{setmodalIsOpen(!modalIsOpen)}}>
       <h1>film information</h1>
       <label>Film Name</label>
       <input type="text" onChange={(e)=>{setFilmData({...filmData,name:e.target.value})}} />
       <label>Film rating</label>
       <input type="text" onChange={(e)=>{setFilmData({...filmData,rating:e.target.value})}} />
       <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Close</button>
     </Modal>
     <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Add film</button>

   </div>
  );
}

export default App;
