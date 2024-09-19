import React from 'react';
import Logo from './Frosty.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <nav className="nav-style">
                <Link to="/SignUp">
                    <button className="btn-style signup-btn">SIGNUP</button>
                </Link>
                <Link to="/Login">
                    <button className="btn-style login-btn">LOGIN</button>
                </Link>
                <Link to="/Flavors">
                    <button className="btn-style menu-btn">VIEW MENU</button>
                </Link>
            </nav>
            <div className="logo-container">
                <img className="logo-style" src={Logo} alt="Frosty Bakers logo" />
                <div className="info-container">
                    <h1>About Us</h1>
                    <p>
                        At Frosty Bakers, we are a proud family-owned bakery based in Nairobi, dedicated to bringing joy to your special moments with our delicious, handcrafted treats. From mouthwatering pastries to custom-designed cakes, our menu offers a delightful array of flavors to suit any occasion. Whether you're celebrating a wedding, birthday, or any other event, we work closely with you to create the perfect cake tailored to your vision. We also provide convenient delivery services for all orders, ensuring your treats arrive fresh and ready to enjoy. Feel free to explore our menu, and remember, we’re just a phone call away! You can reach out to us anytime to place an order or ask any questions—we’re here to make your celebrations sweeter!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;