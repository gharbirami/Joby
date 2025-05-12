import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sign from '../img/sign.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Container>
        <Row>
            <Col sm={6}>
      <form className="form" >
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer?{' '}
            <Link to={`/register`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
      </Col>
      <Col sm={6}>
      <img src={Sign} alt="logo"/></Col>
      </Row>
    </Container>
  )
}
