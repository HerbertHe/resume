import { useTranslation } from "react-i18next"
import ContentBox from "../boxs/ContentBox"

const About = () => {
    const { t } = useTranslation("", { keyPrefix: "about" })

    return <ContentBox title="About">
        <p className="py-1">{t("p1")}</p>
        <p className="py-1">{t("p2")}</p>
        <p className="py-1">{t("p3")}</p>
        <p className="py-1">{t("p4")}</p>
        <p className="py-1">{t("p5")}</p>
    </ContentBox>
}

export default About
