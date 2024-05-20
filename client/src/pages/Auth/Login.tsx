import { Link } from 'react-router-dom';
import Input from '../../components/Auth/Input';
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
  function handleSubmission(e) {
    e.preventDefault();
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

