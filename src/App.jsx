
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


const App = () => {
    return (
      <>
      <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path='/index.html' element={<HomePage/>}/>
                {/* Add more routes as needed */}
            </Routes>
            
            <Footer/>
        </Router>
      </>
        
    );
};

export default App;
