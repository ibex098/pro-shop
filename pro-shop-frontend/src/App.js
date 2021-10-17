import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ProductScreen from './Screens/Product';
import ProfileScreen from './Screens/ProfileScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingScreen from './Screens/ShippingScreen';
import { resConnecter } from './Services';

function App() {
  // const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      resConnecter.defaults.headers.common[
        'Authorization'
      ] = `Bear ${userInfo.token}`;
      // console.log({ userInfo });
    }
  }, []);
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/place-order' component={PlaceOrderScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
