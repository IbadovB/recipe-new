import "./footerMob.css";
import "./footerTab.css";
import "./footer.css"

function Footer() {
  return (
   <div>
<footer>
        <div className="cook1">
          <img src="Illustration2.png" className="illustration" />

          <div className="cook-text">
            <div className="cook">Ready to cook smarter?</div>

            <div className="mobcook">
              <span>Ready to cook </span>
              <span>smarter?</span>
            </div>

            <div className="cook2">
              Hit the button, pick a recipe, and get dinner on the table-fast.
            </div>

            <div className="mobcook2">
              <span>Hit the button, pick a recipe, and </span>
              <span>get dinner on the table-fast.</span>
            </div>
<div className="recipe-button">
     <button className="browse-recipes2">Browse recipes</button>
</div>
       
          </div>

          <img src="Illustration.png" className="illustration2" />
        </div>
      </footer>

    <div className="social">
        <div className="social-text">Made with ❤️ and 🥑</div>

        <div className="socialIcons">
          <div className="soc-icon1"><img src="Vector.png" /></div>
          <div className="soc-icon1"><img src="Vector2.png" /></div>
          <div className="soc-icon1"><img src="tiktok.png" /></div>
        </div>

        <div className="social-text2">Made with ❤️ and 🥑</div>
      </div>
    </div>
  );
}

export default Footer;
