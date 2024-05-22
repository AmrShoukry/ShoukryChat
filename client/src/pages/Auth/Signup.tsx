import { Link } from 'react-router-dom';
import Input from '../../components/Auth/Input';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';

const Signup = () => {
  const preferences = useSelector((store) => store.preferencesReducer);

  async function handleSubmission(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', e.target.firstName.value);
    formData.append('lastName', e.target.lastName.value);
    formData.append('username', e.target.username.value);
    formData.append('email', e.target.email.value);
    formData.append('bio', e.target.bio.value);
    formData.append('password', e.target.password.value);
    formData.append(
      'passwordConfirmation',
      e.target.passwordConfirmation.value,
    );
    formData.append('profilePicture', e.target.image.files[0]);
    formData.append('language', preferences.language);
    formData.append('theme', preferences.theme);
    formData.append('mode', preferences.mode);

    const res = await fetch('http://localhost:8000/v1/auth/signup', {
      method: 'POST',
      body: formData, // No need for 'Content-Type' header with FormData
    });

    const data = await res.json();
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
            <h2 className="font-bold text-[20px]">
              Signup Today in ShoukryChat!
            </h2>
            <div className="flex justify-end">
              <Link to="/login" className="text-sm opacity-80">
                Already Have an account?
              </Link>
            </div>
            <div className="flex justify-between gap-[12px] flex-wrap">
              <Input name="firstName" value="First Name" type="text" />
              <Input name="lastName" value="Last Name" type="text" />
            </div>
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
                name="profilePicture"
                className="hidden"
              />
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

export default Signup;

