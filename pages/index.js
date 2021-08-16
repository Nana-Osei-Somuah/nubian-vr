import Header from "../components/Header"
import WhatWeDo from "../components/WhatWeDo"
import LifeSkills from "../components/LifeSkills"
import EnterpriseQuest from "../components/EnterpriseQuest"
import NubianLabs from "../components/NubianLabs"
import KnowUsMore from "../components/KnowUsMore"
import SayHi from "../components/SayHi"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return (
    <div className="bodyClass">
      <Header/>
      <WhatWeDo/>
      <LifeSkills/>
      <EnterpriseQuest/>
      <NubianLabs/>
      <KnowUsMore/>
      <SayHi/>
      <Footer/>
    </div>
  )
}
