import React, { useState } from 'react'
import dbAPI from '../api/dbAPI'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoginPage = ({ history, setUser }) => {

  const register = () => {
    history.push('/register')
  }

  const login = async (event) => {
    event.preventDefault()
    const loginInfo = {
      "username": event.target.username.value,
      "password": event.target.password.value
    }
    const user = await dbAPI.login(loginInfo)
    setUser(user)

  }
  return (
    <><h1>You must login to play</h1>

      <Form onSubmit = {(e) => login(e)}>
        <FormGroup row>
          <Label for="username" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="username" name="username" id="exampleEmail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password"/>
          </Col>
        </FormGroup>
        <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
      </Form>
      <br/>
      <Col sm={{ size: 10, offset: 2 }}>

      <Button onClick={() => register()}>Register</Button>
      </Col>
    </>
  )
}

export default LoginPage