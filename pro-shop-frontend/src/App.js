import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeScreen from './Screens/Home';
import ProductScreen from './Screens/Product';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/Actions/userActions';
import { resConnecter } from './Services';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //   console.log({ userInfo });
  //   if (userInfo) {
  //     resConnecter.defaults.headers.common['Authorization'] =
  //       'Bear' + userInfo.token;

  //     // dispatch(login(userInfo));
  //   }
  // }, []);
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
