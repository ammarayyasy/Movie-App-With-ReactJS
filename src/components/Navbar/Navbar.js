import {Link} from "react-router-dom";
import NavbarStyled from "./Navbar.styled";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
    return (
        <NavbarStyled>
            <nav>
                <div>
                    <h1>Cinemaindo App</h1>
                </div>
                
                <div>
                    <h2 onClick={handleMenuToggle}>≡</h2>
                    <ul className={isMenuOpen ? 'show' : ''}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie/create">Add Movie</Link>
                        </li>
                        <li>
                            <Link to="/movie/popular">Popular</Link>
                        </li>
                        <li>
                            <Link to="/movie/now">Now Playing</Link>
                        </li>
                        <li>
                            <Link to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    );
}

export default Navbar;