import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
    .then(response => response.json())
    .then(data => {
        console.log(data['name'])
        user = {
            name: data['name']
        }
        localStorage.setItem('userData',user);

        onLoginSuccess();

        navigate('/');
    })
    .catch(error => setError(error))

    /*
    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        //console.log(data.message);
        console.log(data['name'])
        // data_json = {
        //     name: data.name,
        //     username: data.username,
        //     id: data.id
        // }
        localStorage.setItem('userData',data);

        onLoginSuccess();

        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
    */
  };

  const handleRegisterRedirect = () => {
    navigate('/signup'); 
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
        <button type="button" onClick={handleRegisterRedirect}>
          Register Account
        </button>
      </form>
    </div>
  );
}

export default Login;