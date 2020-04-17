import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
  Header
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/profile">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header