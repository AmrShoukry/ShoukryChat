import { useSelector } from 'react-redux';

const ProfileEditOptions = ({ setToggleEdit }) => {
  const user = useSelector((store) => store.userReducer);

  console.log(user.data);

  function handleClose() {
    setToggleEdit(false);
  }

  return (
    <div className="absolute w-dvw h-dvh bg-theme/90 z-[99] top-0 left-0">
      <div className="-translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary rounded-2xl absolute left-1/2 top-1/2 ">
        <div className="backdrop-blur-sm bg-white/40 p-12 rounded-2xl flex flex-col items-center">
          <h2 className="mb-4">Choose the option you want to edit</h2>
          <div className="options flex flex-col gap-1">
            <div>
              <button>Edit Account Data</button>
            </div>
            <div>
              <button>Edit Account Email</button>
            </div>
            <div>
              <button>Edit Account Password</button>
            </div>
          </div>
        </div>

        <button
          className={`flex justify-center items-center absolute ${
            user.data.preferredLanguage === 'en'
              ? '-right-[12px]'
              : '-left-[12px]'
          } -top-[12px] bg-red-400 w-[25px] h-[25px] text-center rounded-full`}
          onClick={(e) => handleClose(e)}>
          x
        </button>
      </div>
    </div>
  );
};

export default ProfileEditOptions;

