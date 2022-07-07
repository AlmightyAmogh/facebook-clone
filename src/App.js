
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const[user,dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? (<Login/>) : (
        <>
   
      <Navbar/>
      <div className="appBody">

      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
      
      {/* modified */}
      {/* Navbar
      Sidebar 
      feed 
      widgets  */}
    
    </>
  )};
    </div>

  );
}

export default App;
