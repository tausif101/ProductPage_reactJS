

function MainBody() {

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>

                <div className="hero-btn">
                    <a href="https://www.adidas.com/us"><button>Shop Now </button></a>
                    <a href="https://www.adidas.com/us/men"><button className="secondary-btn">Category</button>
                    </a>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/public/images/adishoes.webp" alt="hero-image" />
            </div>
        </main>
    );
}

export default MainBody;