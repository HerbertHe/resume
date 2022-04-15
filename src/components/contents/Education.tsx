import ContentBox from "../boxs/ContentBox"
import ExperienceBox from "../boxs/ExperienceBox"

const Education = () => {
    return <ContentBox title="Education">
        <div className="flex flex-col justify-start">
            <ul>
                <ExperienceBox name="Applied Physics" location="North University of China (NUC)" address="Taiyuan, Shanxi" time="Sep. 2017 ~ Jul. 2021" />
            </ul>
        </div>
    </ContentBox>
}

export default Education
