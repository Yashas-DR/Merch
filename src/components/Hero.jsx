import images from "./1.png";
import images2 from "./2.png";
import images3 from "./3.png";
import images4 from "./4.png";
import images5 from "./5.png";
import images6 from "./6.png";
const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <br /><br />
        <h1>YOUR ONE STOP SHOP FOR ANIME MERCH</h1>
        <p>
        STEP INTO A WORLD WHERE PASSION MEETS MERCHANDISE! 
        EXPLORE OUR ANIME HAVEN AND SURROUND YOURSELF WITH A TAPESTRY OF CHARACTERS.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <center>
      <div class="skills-charts">
        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <ul id="tags">
              <li><a href="#" target="_blank"><img src="1.png" alt="" height="100px" width="100px" /></a></li>
              <li><a href="#" target="_blank"><img src="2.png" alt="" height="100px" width="100px" /></a></li>
              <li><a href="#" target="_blank"><img src="3.png" alt="" height="100px" width="100px" /></a></li>
              <li><a href="#" target="_blank"><img src="4.png" alt="" height="100px" width="100px" /></a></li>
              <li><a href="#" target="_blank"><img src="5.png" alt="" height="100px" width="100px" /></a></li>
              <li><a href="#" target="_blank"><img src="6.png" alt="" height="100px" width="100px" /></a></li>
              
             
              
            </ul>
          </canvas>
        </div>
      </div>
</center>
      
      
    </main>

 ); 


<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
script.src="index.js";
script.src="jquery.tagcanvas.js"

};
export default HeroSection;
