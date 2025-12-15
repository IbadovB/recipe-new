import { useState } from "react";
import "./homePage.css"
import "./homePageMob.css"


function HomePage() {
    const [open, setOpen] = useState(false);
    return (
        <div>

            <div className="header">
                <div className="head-logo">
                    <img src="Group.png" className="groupLogo"></img>
                    <div className="head-text">Healthy Recipe Finder</div>
                </div>

                <button className="header-menu">
                    <ul>
                        <li><a href='#' className="home"> Home </a></li>
                        <li><a href='#' className="about"> About </a></li>
                        <li><a href='#' className="recipes"> Recipes </a></li>
                    </ul>
                </button>

                <div className="mobMenu">
                    <button className="dropbtn" onClick={() => setOpen(!open)}>
                        <img src="hambMenu.png" alt="menu" />
                    </button>

                    {open && (
                        <div className="dropdown">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Recipes</a></li>
                                <li><button className="mobBrowse">Browse recipes</button></li>
                            </ul>

                        </div>
                    )}

                </div>

                <button className="browse-recipes"> Browse recipes </button>
            </div>

            <div className="content">
                <div className="heroTitle">Healthy meals, zero fuss</div>
                {/* <div className="colorBox"></div> */}

                <div className="heroSubtitle">
                    <span>Discover eight quick, whole-food recipes that you can cook tonight</span>
                    <span>-no processed junk, no guesswork. </span>
                </div>

                <div className="heroSubtitle2">
                    <span>Discover eight quick, whole-food </span>
                    <span>recipes that you can cook tonight-no</span>
                    <span> processed junk, no guesswork. </span>
                </div>


                <button className="exploring">Start exploring</button>

                <img src="MainContent.png" className="mainContent" />
                 <div className="features">What you'll get</div>

                <div className="icon-text">

                    <div className="carrot"><img src="Carrots.png" alt="" className="carrotIcon" />
                        <div className="icon-header">Whole-food recipes</div>
                        <p className="carrot-text">
                            <span >Each dish uses everyday, unprocessed </span>
                            <span>ingredients.</span>
                        </p>
                    </div>

                     <div className="feature"><img src="FeatureIcon.png" alt="" className="featureIcon" /> 
                        <div className="icon-header">Minimus fuss</div>
                        <p className="feature-text">
                            <span > All recipes are designed to make eating </span>
                            <span>healthy quick and easy.</span>
                        </p>
                    </div>

                    <div className="search"><img src="SearchIcon.png" alt="" className="searchIcon" />
                        <div className="icon-header">Search in seconds</div>
                        <p className="search-text">
                            <span > Filter by name or ingredients and jump </span>
                            <span>straight to the recipe you need.</span>
                        </p>
                    </div>



                </div>


             <div className="real">

                    <div className="real-text">
                        <div className="real-header">
                            Built for real life
                        </div>
                        <div className="real-text2">
                            <span>Cooking shouldn't be complicated. These recipes come in </span>
                            <span>under 30 minutes of active time, fit busy schedules, and </span>
                            <span>taste good enough to repeat.</span>                          

                            <div className="real-text3">
                                <span>Whether you are new to the kitchen or just need fresh </span>
                                <span>ideas, we've got you covered.</span>
                                <div className="colorBox2"></div>

                            </div>
                   
                            

   <div className="mobreal-text2">
                            <span>Cooking shouldn't be complicated. </span>
                            <span> These recipes come inunder 30 </span>
                            <span>minutes of active time, fit busy</span>
                            
                            <span>schedules, andtaste good enough to </span>
                            <span>repeat.</span>

                    </div>

                         </div>
         


                </div>
                  <img src="Real.png" className="real-img" />   


            </div>
        

  <footer> 
                <div className="cook1">
                    <img src="Illustration2.png" className="illustration" />
                    <div className="cook-text">
                        <div className="cook">Ready to cook smarter?</div>
                        <div className="cook2">Hit the button, pick a recipe, and get dinner on the table-fast.</div>
                        <button className="browse-recipes2"> Browse recipes </button>
                    </div>

                    <img src="Illustration.png" className="illustration" />

                </div>

                <div className="social"> 
                    <div className="social-text">Made width  ❤️ and 🥑</div>

                    <div className="socialIcons">
                        <img src="Vector.png" className="soc-icon1" />
                        <img src="Vector2.png" className="soc-icon1" />
                        <img src="tiktok.png" className="soc-icon1" />
                    </div>

                      <div className="social-text2">Made width  ❤️ and 🥑</div>
                </div>


           </footer> 


            </div>
            </div>
   

    )
}

export default HomePage