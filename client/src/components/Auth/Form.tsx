import { Link } from 'react-router-dom';
import Input from './Input';

const Form = () => {
  function handleSubmission(e) {
    e.preventDefault();
  }
  return (
    <>
      <form
        action=""
        onSubmit={(e) => handleSubmission(e)}
        className="m-[32px] p-[32px] max-w-[700px] flex-grow glassy  shadow-2xl rounded-2xl">
        <h2 className="font-bold text-[20px]">Signup Today in ShoukryChat!</h2>
        <div className="flex justify-end">
          <Link to="/login" className="text-sm opacity-80">
            Already Have an account?
          </Link>
        </div>
        <Input name="name" value="Name" type="text" />
        <Input name="username" value="Username" type="text" />
        <Input name="email" value="Email" type="text" />
        <Input name="password" value="Password" type="password" />
        <Input
          name="passwordConfirmation"
          value="Password Confirm"
          type="password"
        />
        <Input name="bio" value="Bio" type="text" />
        <div className="my-[24px]">
          <label htmlFor="image">
            <label htmlFor="image" className="text-sm opacity-60">
              Profile Picture
            </label>
            <div className="cursor-pointer w-[96px] h-[96px] bg-theme rounded-2xl  flex justify-center items-center text-[40px] mt-[4px]">
              +
            </div>
          </label>
          <input
            type="file"
            id="image"
            accept=".png, .jpg, .jpeg"
            className="hidden"
          />
        </div>
        <input
          type="submit"
          value={'Submit'}
          className="cursor-pointer flex mx-auto py-[12px] px-[32px] mt-[24px] bg-theme rounded-full shadow-2xl	"
        />
      </form>
    </>
  );
};

export default Form;

