
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className="appBody">

      <Sidebar/>
      <Feed/>

      </div>
      
      {/* modified */}
      {/* Navbar
      Sidebar 
      feed 
      widgets  */}
    </div>
  );
}

export default App;
