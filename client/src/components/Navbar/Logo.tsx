import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <span>Shoukry</span>
      <span className="text-primary font-bold">Chat</span>
    </Link>
  );
};

export default Logo;

