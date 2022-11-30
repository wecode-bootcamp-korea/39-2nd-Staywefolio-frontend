const REDIRECT_URI = 'http://localhost:3000/auth/kakao';

const NONCE = 'wecode';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&nonce=${NONCE}`;
