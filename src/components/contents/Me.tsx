import { useTranslation } from "react-i18next"

import avatar from "../../assets/avatar.jpeg"

const emails = [
    "i@jieec.cn",
    "Herbert.He0229@outlook.com",
    "Herbert.He0229@gmail.com"
]

const Me = () => {
    const { t } = useTranslation("", { keyPrefix: "me" })

    return <div className="w-full flex flex-col">
        <img src={avatar} alt="avatar" className="w-30 h-30 rounded-full mb-5 shadow shadow-gray-400" />
        <h1 className="text-xl font-semibold">{t("name")}</h1>
        <p className="my-2 text-sm text-gray-500">{t("description")}</p>
        <ul className="my-1 text-sm">
            {emails.map(item => <li key={item}><a className="underline underline-dotted underline-gray-500 hover:underline-solid" href={`mailto:${item}`}>{item}</a></li>)}
        </ul>
    </div>
}

export default Me
