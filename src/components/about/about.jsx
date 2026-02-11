
import './about.css'
import { existPart } from './aboutPage/data/about'
import { philosophyPart } from './aboutPage/data/about'


function About() {
    return (
        <div>


            <div className="mission">

                <div className="mission1">

                    <h3>Our mission</h3>

                    <div className="mission2">

                        <div className="missionHeader">
                            <h1>Help more people cook nourishing meals, more often.</h1>
                        </div>

                        <div className="mission-text">

                            <div className="mission-text1">
                                Healthy Recipe Finder was created to prove that healthy
                                eating can be convenient, affordable, and geniunely
                                delicious.
                            </div>

                            <div className="mission-text2">
                                We showcase quick, whole-food dishes that anyone can master-no fancy equipment,
                                no ultra-processed shortcuts -just honest ingredients and straightforward steps.
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mission-photo">
                    <img src="mission.png" alt="photo" />
                </div>

            </div>

            <div className="exist">

                <div className="existHeader">{existPart.name}</div>

                <div className="exist_items">



                    {existPart.items.map((item) => (

                        <div className="exist_item" key={item.id}>

                            <img src={item.iconUrl} alt='item.headerText' />

                            <div className="exist-text">
                                <div className="exist-text1">{item.headerText}</div>
                                <div className="exist-text2">{item.subText}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/*  <div className="philosophy">

                <div className="philosophyHeader">
                    Our food philosophy
                </div>

                <div className="philosophy-text">


                    <div className="philosophy2">
                        <img src="right-arrow.png" alt="" />
                        <div className="ingredients">
                            <div className="ingredients-header">Whole ingredients first. </div>


                            <div className="ingredients-text">
                                Fresh produce, grains, legumes, herbs, and quality fats from the backbone of every recipe.
                            </div>

                        </div>

                    </div>

                    <div className="philosophy2">

                        <img src="right-arrow.png" alt="" />
                        <div className="flavor">
                            <div className="flavor-header">
                                Flavor without compromise.
                            </div>


                            <div className="flavor-text">
                            </div>
                        </div>

                    </div>


                    <div className="philosophy2">
                        <img src="right-arrow.png" alt="" />
                        <div className="time">

                            <div className="time-header"></div>


                            <div className="time-text">

                                Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.
                            </div>



                        </div>

                    </div>

                    <div className="philosophy2">
                        <img src="right-arrow.png" alt="" />
                        <div className="choices">

                            <div className="choices-header">Sustainable choices.</div>

                            <div className="choices-text">

                                Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.
                            </div>


                        </div>

                    </div>

                </div>



            </div>*/}

               <div className="philosophy">

                <div className="philosophyHeader">{philosophyPart.name}</div>

                <div className="philosophy_items">

                    {philosophyPart.items.map((item) => (

                        <div className="philosophy_item" key={item.id}>

                            <img src={item.iconUrl} alt='item.headerText' />

                            <div className="philosophy-text">
                                <div className="philosophy-text1">{item.headerText}</div>
                                <div className="philosophy-text2">{item.subText}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>











            <div className="beyond">

                <div className="beyond2">

                    <div className="beyond3">
                        <div className="beyond-header">
                            Beyond the plate
                        </div>


                        <div className="belive-text">
                            We belive food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
                        </div>


                        <div className="dinners-text">
                            <ul>

                                <li>Encourange family dinners and social cooking.

                                </li>

                                <li>
                                    Reduce reliance on single-use packaging and delivery waste.
                                </li>

                                <li>
                                    Spark curiosity about seasonal produce and local agriculture.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="beyondPhoto">
                    <img src="beyond.png" alt="" />
                </div>

            </div>

        </div >












    )
}

export default About