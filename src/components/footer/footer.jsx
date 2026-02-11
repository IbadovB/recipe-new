// import "./footerMob.css";
// import "./footerTab.css";
import "./footer.css"
import '../../assets/index.css'
import { NavLink} from "react-router-dom"
import '../../assets/styles/buttons/button.css'



function Footer() {


  return (
   <div>
    
       <footer>
      <div className="cook">
           <img src="/Illustration2.png" className="illustration1" />

          <div className="cook-text">
            <div className="cook-header">Ready to cook smarter?</div>

            <div className="cook-text2">
              Hit the button, pick a recipe, and get dinner on the table-fast.
            </div>

            <div className="recipe-button">
              <NavLink
                to="./recipes"
                end
                className={'button button--primary'}
              >
                Browse recipes
              </NavLink>
            </div>

          </div>

         <img src="/Illustration.png" className="illustration2" /> 
        </div>
      </footer>

    </div>
  );
}

export default Footer;
