import './App.css';
import { Addtask } from './components/Addtask';
import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Update } from './components/Update';

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'element={<List />} />
        <Route path='/add'element={<Addtask/>} />
        <Route path='/update/:id'element={<Update/>} />
      </Routes>
    </>
  )
}

export default App
