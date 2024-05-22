import Navbar from '../../components/Navbar/Navbar';
import GridData from '../../components/Profile/GridData';
import ProfilePicture from '../../components/Profile/ProfilePicture';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[64px] min-h-[100vh] bg-gradient-to-r from-primary to-theme">
        <div className="background">
          <div className="container mx-auto px-[16px] py-[32px] flex flex-col gap-[64px] minHeightWithNav">
            <ProfilePicture />
            <GridData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

