import { FC } from "react";
import ContentBox from "../boxs/ContentBox";

interface IOpenSourceProjectProps {
    title: string
    role: string
    url: string
}

const OpenSourceProject: FC<IOpenSourceProjectProps> = ({ title, role, url }) => <li className="rounded p-3 border border-gray-300 flex-1 overflow-hidden">
    <a href={url}>
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{role}</p>
    </a>
</li>

const projects: Array<IOpenSourceProjectProps> = [
    { title: "Vanessa219/vditor", role: "Contributor", url: "https://github.com/Vanessa219/vditor" },
    { title: "windicss/docs-cn", role: "Maintainer", url: "https://github.com/windicss/docs-cn" },
    { title: "NucoTech/nuco-backend-cli", role: "Author", url: "https://github.com/NucoTech/nuco-backend-cli" },
    { title: "ha-pin/rime-kz-experiment", role: "Author", url: "https://github.com/ha-pin/rime-kz-experiment" },
    { title: "ha-pin/hapin-utils", role: "Author", url: "https://github.com/ha-pin/hapin-utils" },
    { title: "ha-pin/hapin-arabic", role: "Author", url: "https://github.com/ha-pin/hapin-arabic" },
    { title: "docsify-progress", role: "Author", url: "https://github.com/HerbertHe/docsify-progress" },
    { title: "docsify-beian", role: "Author", url: "https://github.com/HerbertHe/docsify-beian" },
    { title: "docsify-codeblock-iframe", role: "Author", url: "https://github.com/HerbertHe/docsify-codeblock-iframe" },
    { title: "827652549/docsify-count", role: "Contributor", url: "https://github.com/827652549/docsify-count" },
]

const OpenSource = () => <ContentBox title="Open Source">
    <ul className="w-full grid grid-cols-3 my-2 gap-4 <lg:(flex flex-col)">
        {projects.map(project => <OpenSourceProject key={project.url} {...project} />)}
    </ul>
    <div><a href="https://github.com/HerbertHe" className="underline underline-dotted hover:(underline-solid)">More...</a></div>
</ContentBox>

export default OpenSource
