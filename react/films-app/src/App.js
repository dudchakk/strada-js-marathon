import RegisterModal from './components/RegisterModal'
import LoginModal from './components/LoginModal';
import './App.css';

function App() {
  const isRegistered = true
  
  return (
    <div>
      { isRegistered ? <LoginModal /> : <RegisterModal /> }
    </div>
  );
}

export default App;
