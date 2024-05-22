import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileEditOptions from './ProfileEditOptions';

const ProfilePicture = () => {
  const user = useSelector((store) => store.userReducer);
  const [toggleEdit, setToggleEdit] = useState(false);

  function handleRequestEditButton(e) {
    console.log('a');
    setToggleEdit(true);
  }

  console.log(user.data);

  return (
    <div className="flex flex-col gap-[8px] justify-center items-center mt-[40px]">
      <img
        className="w-[100px] h-[100px] rounded-xl bg-slate-800"
        src="http://localhost:8000/images/profilePicture-amr.jpeg"></img>
      <p>
        {user.data.firstName} {user.data.lastName}
      </p>
      <button onClick={(e) => handleRequestEditButton(e)}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M15.98 3H8.02C4.57 3 2.5 5.06 2.5 8.52V16.47C2.5 19.94 4.57 22 8.02 22H15.97C19.43 22 21.49 19.94 21.49 16.48V8.52C21.5 5.06 19.43 3 15.98 3Z"
            fill="#171717"
          />
          <path
            d="M21.52 2.98003C19.73 1.18003 17.98 1.14003 16.14 2.98003L15.01 4.10003C14.91 4.20003 14.88 4.34003 14.92 4.47003C15.62 6.92003 17.58 8.88003 20.03 9.58003C20.06 9.59003 20.11 9.59003 20.14 9.59003C20.24 9.59003 20.34 9.55003 20.41 9.48003L21.52 8.36003C22.43 7.45003 22.88 6.58003 22.88 5.69003C22.88 4.79003 22.43 3.90003 21.52 2.98003Z"
            fill="#171717"
          />
          <path
            d="M18.3601 10.42C18.0901 10.29 17.8301 10.16 17.5901 10.01C17.3901 9.88997 17.1901 9.75997 17.0001 9.61997C16.8401 9.51997 16.6601 9.36997 16.4801 9.21997C16.4601 9.20997 16.4001 9.15997 16.3201 9.07997C16.0101 8.82997 15.6801 8.48997 15.3701 8.11997C15.3501 8.09997 15.2901 8.03997 15.2401 7.94997C15.1401 7.83997 14.9901 7.64997 14.8601 7.43997C14.7501 7.29997 14.6201 7.09997 14.5001 6.88997C14.3501 6.63997 14.2201 6.38997 14.1001 6.12997C13.9701 5.84997 13.8701 5.58997 13.7801 5.33997L8.4001 10.72C8.0501 11.07 7.7101 11.73 7.6401 12.22L7.2101 15.2C7.1201 15.83 7.2901 16.42 7.6801 16.81C8.0101 17.14 8.4601 17.31 8.9601 17.31C9.0701 17.31 9.1801 17.3 9.2901 17.29L12.2601 16.87C12.7501 16.8 13.4101 16.47 13.7601 16.11L19.1401 10.73C18.8901 10.65 18.6401 10.54 18.3601 10.42Z"
            fill="#171717"
          />
        </svg>
      </button>
      {toggleEdit && <ProfileEditOptions setToggleEdit={setToggleEdit} />}
    </div>
  );
};

export default ProfilePicture;

