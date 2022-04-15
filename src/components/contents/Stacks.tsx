import { FC } from "react";
import ContentBox from "../boxs/ContentBox";

interface IStackProps {
    name: string
    progress: number
}

const stacks: IStackProps[] = [
    { name: "TypeScript", progress: 80 },
    { name: "React", progress: 80 },
    { name: "Node.js", progress: 80 },
    { name: "Golang", progress: 60 },
    { name: "Rust", progress: 30 },
    { name: "Python", progress: 60 },
]

const Stack: FC<IStackProps> = ({ name, progress }) =>
    <li className="flex flex-row w-1/2 my-1 <lg:(w-full)">
        <span className="w-[100px]">{name}</span>
        <input type={'range'} title={name} min={0} max={100} value={progress} className="flex-1" readOnly />
    </li>


const Stacks = () => <ContentBox title="Stacks">
    <ul className="w-full">
        {stacks.map(stack => <Stack key={stack.name} {...stack} />)}
    </ul>
</ContentBox>

export default Stacks
