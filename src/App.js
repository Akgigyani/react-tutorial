import './App.css';
// import AKLogo from './assets/imgs/AKLogo.png'
// import {Link} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Textform from './components/Textform';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container">
    <Textform heading="Enter text to analyze" textheading="Enter Text Below" />
    </div>
    <Footer />
    </>
  );
}

export default App;
