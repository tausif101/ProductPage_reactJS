function Header() {
return (
    <nav className="container header">
        <div className="logo">
        <img src="images/adidasLogo.png" alt="adidas-logo" />
        </div>
        <ul>
        <a href="#">Menu</a>
            <a href="https://www.adidas.com/us/location-selector.html">Location</a>
            <a href="https://www.adidas-group.com/en/about/profile">About</a>
            <a href="https://www.adidas.com/us/help/us-company-information/how-do-i-contact-adidas">Contact</a>
        </ul>
        <button>login</button>
    </nav>
);
}

export default Header;