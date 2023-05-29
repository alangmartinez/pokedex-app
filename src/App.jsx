import { Container } from '@chakra-ui/react';
import Header from  "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {


  return (
    <Container maxW='container.xl' w='full'>
      <Header />
      <Routes>
        <Route path='*' element={<Home />}></Route>
        <Route path='/'  element={<Home />} errorElement={<ErrorPage />} />
        <Route path='/about'  element={<About />} errorElement={<ErrorPage />} />
        <Route path='/contact'  element={<Contact />} errorElement={<ErrorPage />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
