import { FC, Fragment, PropsWithChildren } from "react"

type ContentBoxPropsType = PropsWithChildren<{
    title: string
}>

const ContentBox: FC<ContentBoxPropsType> = ({ title, children }) => {
    return <div className="w-full flex flex-col justify-start items-start my-4">
        <div className="font-semibold text-lg">『<span className="px-1">{title}</span>』</div>
        {children && <div className="w-full p-2">{children}</div>}
    </div>
}

export default ContentBox
