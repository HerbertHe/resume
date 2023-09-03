import ContentBox from "../boxs/ContentBox"
import ExperienceBox from "../boxs/ExperienceBox"

const WorkExperience = () => {
    return <ContentBox title="WorkExperience">
        <ul>
            <ExperienceBox name="Clerk" location="Bureau of Statistics of Mori Kazakh Autonomous County" address="Mori, Changji, Xinjiang" time="Jul. 2022 ~ Jul. 2023" />
            <ExperienceBox name="Party and Government Official" location="Queren Township People's Government" address="Mori, Changji, Xinjiang" time="Aug. 2021 ~ Jul. 2022" />
            <ExperienceBox name="Collegiate Volunteer to CFWP" location="China's Far West Program" address="Mori, Changji, Xinjiang" time="Aug. 2021 ~ Jul. 2023" />
        </ul>
    </ContentBox>
}

export default WorkExperience
