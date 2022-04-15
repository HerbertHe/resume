import About from "./components/contents/About"
import Education from "./components/contents/Education"
import Me from "./components/contents/Me"
import WorkExperience from "./components/contents/WorkExperience"

const App = () => <main className="w-full flex flex-row justify-center items-start p-6">
    <div className="w-[300px]">
        <Me />
    </div>
    <div className="flex-1 ml-[50px]">
        <About />
        <Education />
        <WorkExperience />
    </div>
</main>

export default App
