import "./homePage.css"
import { weGetPart } from './data/home'


function HomePage() {
    return (
        <div className="home__container ">
            <div className="content">

                <h1 className="heroTitle"> <span className="spanText"> <span>Healthy</span> meals,</span> zero fuss</h1>

               <div className="heroSubtitle">
                    Discover eight quick, whole-food recipes that you can cook tonight - no processed junk, no guesswork.
                </div>    

                <button className="exploring">Start exploring</button>

                <img src="mainContent.png" className="mainContent" />

            </div>


            <div className="features">

                <div className="features__header"> {weGetPart.name}</div>

                <div className="features__items">
                    {weGetPart.items.map((item) => (
                        <div key={item.id}>
                            <img src={item.iconUrl} alt={item.headerText} />
                            <h3>{item.headerText}</h3>
                            <p>{item.subText}</p>
                        </div>
                    ))}

                </div>

            </div>


          <div className="real-life">

                <div className="real-text">
                    <div className="real-header">
                        Built for real life
                    </div>
                    <div className="real-text1">
                        Cooking shouldn't be complicated. These recipes come in under <span className="spanText1">30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat.
                        </div>

                          <div className="real-text2">
                        Cooking shouldn't be complicated. These recipes come in under <span className="spanText2">30 </span> <span className="spanText2">minutes</span> of active time, fit busy schedules, and taste good enough to repeat.
                        </div>

                        <div className="real-text3">
                            Whether you are new to the kitchen or just need fresh ideas, we've got you covered.
                        </div>

                    </div>

                     <img src="realLife.png" className="real-img" />

                </div>


              {/* <div className="mobtext">
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


                </div>*/}

               

            </div>


   
    )
}

export default HomePage