import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>TODO</h2>
        <AddTask />
        <Tasks />
        </div>
    </div>
  );
}

export default App;
