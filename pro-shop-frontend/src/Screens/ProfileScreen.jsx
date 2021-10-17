import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserDetails,
  updateUserProfile,
} from '../redux/Actions/userActions';
import Message from '../Components/Message/Message';
import Loader from '../Components/Loader/Loader';

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Profile</h2>

        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        {success && <Message variant='success'>Profile Updated</Message>}

        <Form onSubmit={submitHandler}>
          <FormGroup controlId='name'>
            <FormLabel>Name</FormLabel>
            <FormControl
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId='email'>
            <FormLabel>Email Address</FormLabel>
            <FormControl
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId='password'>
            <FormLabel>Password</FormLabel>
            <FormControl
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId='confirmPassword'>
            <FormLabel>Password</FormLabel>
            <FormControl
              type='password'
              placeholder='Enter confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></FormControl>
          </FormGroup>

          <Button type='submit' variant='primary' className='my-3'>
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Order</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
