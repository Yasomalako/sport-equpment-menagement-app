import logo from './logo.svg';
import './App.css';
import { Home } from './componentes';
import Header from './featurs/header/header';
import Footer from './featurs/footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
