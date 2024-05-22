import { useEffect } from 'react';

import { setUser } from '../../components/Auth/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      const res = await fetch('http://localhost:8000/v1/auth/logout', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      if (data.status === 'success') {
        navigate('/login');
      }
      dispatch(setUser(null));
    }
    logout();
  }, []);
  return <></>;
};

export default Logout;

