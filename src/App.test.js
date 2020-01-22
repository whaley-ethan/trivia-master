import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import App from './App';

let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders login page when not logged in', () => {
  // navigate to '/'

  // test if the <LoginPage /> element exists in document
});

it('renders home page when logged in', () => {
  // login
  // navigate to '/'

  // test if the <HomePage /> element exists in document
});

it('renders a menu bar', () => {
  //test for <NavBar /> element
})

it('renders different menu bar when logged in', () => {
  // login

  //test for different <NavBar /> element
})