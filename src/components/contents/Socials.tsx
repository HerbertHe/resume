import Icon from "../boxs/Icon"

const socicals = [
    {
        title: "GitHub", icon: "charm:github", url: "https://github.com/HerbertHe"
    },
    {
        title: "Twitter", icon: "line-md:twitter", url: "https://twitter.com/HerbertHe_"
    },
]

const Socials = () => <ul className="flex flex-row">
    {socicals.map(({ title, icon, url }) => <li className="p-1 hover:(bg-gray-200 rounded-md)" key={url} title={title}>
        <a href={url} title={title}>
            <Icon icon={icon} />
        </a>
    </li>)}
</ul>

export default Socials
