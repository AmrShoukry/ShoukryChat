import Input from '../../components/Auth/Input';
import Navbar from '../../components/Navbar/Navbar';

const NewEmail = () => {
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
            <h2 className="font-bold text-[20px]">Change Your Email</h2>
            <Input name="oldEmail" value="Old Email" type="text" />
            <Input name="newEmail" value="New Email" type="text" />
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

export default NewEmail;

