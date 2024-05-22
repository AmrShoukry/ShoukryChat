import Navbar from '../../components/Navbar/Navbar';
import ProfilePicture from '../../components/Profile/ProfilePicture';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[64px] bg-yellow-400">
        <div className=" container mx-auto px-[16px] py-[32px]">
          <ProfilePicture />
        </div>
      </div>
    </>
  );
};

export default Profile;

