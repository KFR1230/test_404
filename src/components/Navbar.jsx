import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <header
          style={{
            height: '80px',
            width: '100%',
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#3f3f3f',
          }}
        >
          <div
            style={{
              border: '1px 1px red',
              height: '24px',
              width: '24px',
              marginLeft: '12px',
            }}
          >
            logo
          </div>
          <div
            style={{
              display: 'flex',
              gap: '4px',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: '500',
              marginRight: '12px',
            }}
          >
            <Link to={'/'} style={{ color: 'black', cursor: 'pointer' }}>
              Home
            </Link>
            <span
              style={{
                width: '1px',
                height: '12px',
                backgroundColor: 'gray',
              }}
            />
            <Link to={'/about'} style={{ color: 'black', cursor: 'pointer' }}>
              about
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
