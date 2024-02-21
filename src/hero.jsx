export default function Hero()
{
  

    return(
        <>
          {/* HERO Content */}
          <div className="main">
          <div className="hero">
            <div className="hero-content">
              <div>
                <h1>YOUR FEET
                  DESERVE
                  THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
              </div>
              <div className="hero-buttons">
                <button>Shop Now</button>
                <button className='cat'>Category</button>
              </div>
              <div className="available">
                <p>Also Available On</p>
                <div className="images">
                <img src="./images/flipkart.png" alt="flipkart image" />
                <img src="./images/amazon.png" alt="amazon image" />
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="./images/shoe_image.png" alt="shoe-image" />
            </div>
          </div>

        </div>
        </>
    )
}
