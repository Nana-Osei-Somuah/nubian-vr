import Header from "../components/Header"
import ComingofAge from "../components/ComingofAge"
import LifeSkillsFirstComp from "../components/LifeSkillsFirstComp"
import LifeSkillsAppIntro from "../components/LifeSkillsAppIntro"
import LifeSkillsFeatures from "../components/LifeSkillsFeatures"
import ContentModules from "../components/ContentModules"
import SignUp from "../components/SignUp"
import Footer from "../components/Footer"

const lifeskillspage = () => {
    return (
        <div>
            <Header/>
            <LifeSkillsFirstComp/>
            <ComingofAge/>
            <LifeSkillsAppIntro/>
            <LifeSkillsFeatures/>
            <ContentModules/>
            <SignUp/>
            <Footer/>
        </div>
    )
}

export default lifeskillspage
