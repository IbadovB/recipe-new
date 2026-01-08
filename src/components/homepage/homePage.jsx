import "./homePage.css"
import "./homePageMob.css"
import "./homePageTab.css"



function HomePage() {
    return (
        <div>
        <div className="content">
                <h1 className="heroTitle"><span>Healthy</span> meals, zero fuss</h1>
                <h1 className="mobHeroTitle"><span><span className="spanText"> Healthy </span> meals,</span> zero fuss</h1>

                <div className="heroSubtitle">
                    <span>Discover eight quick, whole-food recipes that you can cook tonight</span>
                    <span>-no processed junk, no guesswork. </span>
                </div>


                <div className="heroSubtitle2">
                    <span>Discover eight quick, whole-food </span>
                    <span>recipes that you can cook tonight-no</span>
                    <span> processed junk, no guesswork. </span>
                </div>


                <div className="heroSubtitle3">
                    <span>Discover eight quick, whole-food recipes that you can cook tonight-no </span>
                    <span> processed junk, no guesswork. </span>
                </div>



                <button className="exploring">Start exploring</button>

                <img src="MainContent.png" className="mainContent" />

            </div>*


            <div className="features">

                <div className="features-text"> What you'll get</div>


                <div className="icon-text">

                    <div className="carrot"><img src="Carrots.png" alt="" className="carrotIcon" />
                        <div className="icon-header">Whole-food recipes</div>

                        <p className="carrot-text">
                            <span >Each dish uses everyday, unprocessed </span>
                            <span>ingredients.</span>
                        </p>

                        <p className="tabCarrot-text">
                            <span >Each dish uses everyday, unprocessed ingredients.</span>
                        </p>

                    </div>

                    <div className="feature"><img src="FeatureIcon.png" alt="" className="featureIcon" />
                        <div className="icon-header">Minimus fuss</div>
                        <p className="feature-text">
                            <span > All recipes are designed to make eating </span>
                            <span>healthy quick and easy.</span>
                        </p>

                        <p className="tabFeature-text">
                            <span > All recipes are designed to make eating healthy quick and easy.</span>
                        </p>


                    </div>

                    <div className="search"><img src="SearchIcon.png" alt="" className="searchIcon" />
                        <div className="icon-header">Search in seconds</div>
                        <p className="search-text">
                            <span > Filter by name or ingredients and jump straight to the recipe you need.</span>
                        </p>

                        <p className="tabSearch-text">
                            <span > Filter by name or ingredients and jump straight to the recipe you need.</span>
                        </p>


                    </div>

                </div>
            </div>


         <div className="real">

                <div className="real-text">
                    <div className="real-header">
                        Built for real life
                    </div>
                    <div className="real-text2">
                        <span>Cooking shouldn't be complicated. These recipes come in </span>
                        <span>under <span className="spanText2">30 minutes</span> of active time, fit busy schedules, and </span>
                        <span>taste good enough to repeat.</span>

                        <div className="real-text3">
                            <span>Whether you are new to the kitchen or just need fresh </span>
                            <span>ideas, we've got you covered.</span>


                        </div>

                    </div>

                </div>


                <div className="mobtext">
                    <div className="mobreal-header">
                        Built for real life
                    </div>
                    <div className="mobrealText2">
                        <span>Cooking shouldn't be complicated. </span>
                        <span>These recipes come inunder<span className="spanText5"> 30 </span></span>
                        <span> <span className="spanText5"> minutes </span> of active time, fit busy </span>
                        <span>schedules, andtaste good enough to </span>
                        <span>repeat.</span>
                    </div>

                    <div className="mobrealText3">
                        <span>Whether you are new to the kitchen or </span>
                        <span>just need fresh ideas, we've got you </span>
                        <span>covered.</span>


                    </div>
                </div>

                <div className="tabtext">
                    <div className="tabReal-header">
                        Built for real life
                    </div>
                    <div className="tabReal-text2">
                        <span>Cooking shouldn't be complicated. These recipes come in under <span className="spanText3">30 minutes</span> of </span>
                        <span>active time, fit busy schedules, and taste good enough to repeat.</span>
                    </div>

                    <div className="tabReal-text3">
                        <span>Whether you are new to the kitchen or just need fresh ideas, we've got you</span>
                        <span>covered.</span>
                    </div>


                </div>

                <img src="Real.png" className="real-img" />

            </div>


        </div>
    )
}

export default HomePage