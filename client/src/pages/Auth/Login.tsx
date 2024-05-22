import { Link } from 'react-router-dom';
import Input from '../../components/Auth/Input';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from '../../components/Auth/UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmission(e) {
    e.preventDefault();
    const sentData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch('http://localhost:8000/v1/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sentData),
    });

    const data = await res.json();
    console.log(data);
    dispatch(setUser(data.user));

    if (data.status === 'success') {
      navigate('/');
    }
    console.log(data);
  }
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-primary to-theme h-auto pt-[64px]">
        <div className="backdrop-blur-sm background relative minHeightWithNav flex justify-center items-center overflow-hidden">
          <form
            action=""
            onSubmit={(e) => handleSubmission(e)}
            className="m-[32px] p-[32px] max-w-[700px] flex-grow glassy  shadow-2xl rounded-2xl">
            <h2 className="font-bold text-[20px]">Login in ShoukryChat!</h2>
            <div className="flex justify-end">
              <Link to="/signup" className="text-sm opacity-80">
                Don't Have an account?
              </Link>
            </div>
            <Input name="email" value="Email" type="text" />
            <Input name="password" value="Password" type="password" />
            <div className="flex justify-end mt-[12px]">
              <Link to="/reset" className="text-sm opacity-80">
                Forget Your password?
              </Link>
            </div>

            <input
              type="submit"
              value={'Submit'}
              className="cursor-pointer flex mx-auto py-[12px] px-[32px] mt-[24px] bg-theme rounded-full shadow-2xl	"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

