import './App.css';
import {useSelector} from 'react-redux'
import List from './components/List'


function App() {
  const state =useSelector((state)=>({...state}))
  console.log(state)
  return (
    <div>
    <List/>
    
    </div>
  );
}

export default App;
