import About from "./components/contents/About"
import Banner from "./components/contents/Banner"
import Education from "./components/contents/Education"
import Me from "./components/contents/Me"
import OpenSource from "./components/contents/OpenSource"
import Socials from "./components/contents/Socials"
import Sponsor from "./components/contents/Sponsor"
import Stacks from "./components/contents/Stacks"
import WorkExperience from "./components/contents/WorkExperience"

const App = () => <main className="w-full flex flex-row justify-center items-start p-6 <lg:(flex-col px-5)">
    <div className="w-[300px] sticky top-6 <lg:(static px-2 mb-5)">
        <Me />
        <Socials />
        <Sponsor />
    </div>
    <div className="flex-1 ml-[50px] <lg:(ml-0)">
        <Banner />
        <About />
        <Education />
        <OpenSource />
        <Stacks />
        <WorkExperience />
    </div>
</main>

export default App
