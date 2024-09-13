import Logo from './Frosty.png'

function Home () {
    return (
        <div className="logo-container">
            <img className='logo-style' src={Logo} alt="Frosty bakers logo" />
            <div className="info-container">
                <h1>About Us</h1>
                <p>
                    At Frosty Bakers, we are a proud family-owned bakery based in Nairobi, dedicated to bringing joy to your special moments with our delicious, handcrafted treats. From mouthwatering pastries to custom-designed cakes, our menu offers a delightful array of flavors to suit any occasion. Whether you're celebrating a wedding, birthday, or any other event, we work closely with you to create the perfect cake tailored to your vision. We also provide convenient delivery services for all orders, ensuring your treats arrive fresh and ready to enjoy. Feel free to explore our menu, and remember, we’re just a phone call away! You can reach out to us anytime to place an order or ask any questions—we’re here to make your celebrations sweeter!
                </p>
            </div>
        </div>
    );
}

export default Home;
