import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
    <div className='navbar'>
        <div>
            <Link to='/about'>О сайте</Link>
            <Link to='/notes'>Список задач</Link>
        </div>
    </div>
   );
};

export default Navbar;
