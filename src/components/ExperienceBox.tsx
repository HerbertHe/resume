import { FC } from "react"

type ExperienceBoxProps = {
    name: string
    location: string
    address: string
    time: string
}

const ExperienceBox: FC<ExperienceBoxProps> = ({ name, location, address, time }) => <li className="my-2">
    <p className="font-semibold">{name}</p>
    <p>{location}</p>
    <p className="text-sm">{address}</p>
    <p className="text-sm">{time}</p>
</li>

export default ExperienceBox
