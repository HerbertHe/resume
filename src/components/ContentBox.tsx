import { FC, PropsWithChildren } from "react"

type ContentBoxPropsType = PropsWithChildren<{
    title: string
}>

const ContentBox: FC<ContentBoxPropsType> = ({ title, children }) => {
    return <div className="w-full flex flex-col justify-start items-start my-2">
        <div className="font-semibold text-lg">『{title}』</div>
        {children && <div>{children}</div>}
    </div>
}

export default ContentBox
