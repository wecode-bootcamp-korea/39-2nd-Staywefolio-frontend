import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../../config';

const LoginCode = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    fetch(`${BASE_URL}/auth/login/kakao?authorizationCode=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', JSON.stringify(data.jwtToken));
        window.location.replace('/');
      });
  }, []);
};

export default LoginCode;
