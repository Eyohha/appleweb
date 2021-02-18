import React, { Component } from 'react';
import logo from '../../Assets/Apple-icons/logo-sm.png';
import search from '../../Assets/Apple-icons/search-icon-sm.png';
import cart from '../../Assets/Apple-icons/cart-sm.png';
import './Nav.css';
import '../../Assets/style.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


// class Nav extends Component
// {
//     render()
//     {
//         return (
//             <header className="nav-box fixed-top">
//                 <div className="container">
//                     <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//                         <div className="navbar-collapse collapse">
//                             <ul className="navbar nav-justified w-100 nav-fill">
//                                 <NavLink href="/" name={<img src={logo} alt="" />} />
//                                 <NavLink href="/mac" name='Mac' />
//                                 <NavLink href="https://www.apple.com/ipad/" name='iPad' />
//                                 <NavLink href="/iphone" name='iPhone' />
//                                 <NavLink href="https://www.apple.com/watch/" name='Watch' />
//                                 <NavLink href="https://www.apple.com/tv/" name='Tv' />
//                                 <NavLink href="https://www.apple.com/music/" name='Music' />
//                                 <NavLink href="https://support.apple.com/" name='Support' />
//                                 <NavLink href="#" name={<img src={search} alt="" />} />
//                                 <NavLink href="#" name={<img src={cart} alt="" />} />
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
//             </header>
//         );
//     }
// }

// export default Nav;

class Navigation extends Component
{
    render()
    {
        return (
            <div className="nav-box fixed-top">
                <div className="container">
                    <Navbar className="w-100" navbar navbar-expand-lg navbar-dark bg="black" expand="lg" variant="dark">
                        <Navbar.Brand href='/'><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/mac">Mac</Nav.Link>
                                <Nav.Link href="https://www.apple.com/ipad/">iPad</Nav.Link>
                                <Nav.Link href="/iphone" name='iPhone'>iPhone</Nav.Link>
                                <Nav.Link href="https://www.apple.com/watch/">Watch</Nav.Link>
                                <Nav.Link href="https://www.apple.com/tv/">Tv</Nav.Link>
                                <Nav.Link href="https://www.apple.com/music/">Music</Nav.Link>
                                <Nav.Link href="https://support.apple.com/">Support</Nav.Link>
                                <Nav.Link href="#"><img src={search} alt="" /></Nav.Link>
                                <Nav.Link href="#" ><img src={cart} alt="" /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Navigation;