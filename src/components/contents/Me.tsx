import { useTranslation } from "react-i18next"

const emails = [
    "admin@jieec.cn",
    "Herbert.He0229@gmail.com"
]

const Me = () => {
    const { t } = useTranslation("", { keyPrefix: "me" })

    return <div className="w-full flex flex-col">
        <h1 className="text-xl font-semibold">{t("name")}</h1>
        <p className="my-2 text-sm text-gray-500">{t("description")}</p>
        <ul className="my-1 text-sm">
            {emails.map(item => <li key={item}><a className="underline underline-dotted underline-gray-500 hover:underline-solid" href={`mailto:${item}`}>{item}</a></li>)}
        </ul>
    </div>
}

export default Me
