import { Link } from 'react-router-dom';
import { menus } from '../links';
import { title } from '../config';
const style = {
  borderTop: '1px solid #e5e5e5',
  borderBottom: '1px solid #e5e5e5',
  boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)',
};

export default () => (
  <header>
    <div
      style={style}
      className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white'
    >
      <h3 className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark'>
        <Link to={'/'} className='text-decoration-none'>
          {title}
        </Link>
      </h3>
      <nav className='my-2 my-md-0 mr-md-3'>
        {menus.map((menu, i) => (
          <Link
            className='p-2 text-dark text-decoration-none'
            key={i}
            to={menu.link}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
