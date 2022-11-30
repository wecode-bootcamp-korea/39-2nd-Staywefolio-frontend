import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoginCode = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    fetch(
      `http://10.58.52.132:3000/auth/login/kakao?authorizationCode=${code}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', JSON.stringify(data.jwtToken));
        navigate('/login');
      });
  }, []);

  return <div>로그인중입니다</div>;
};

export default LoginCode;
