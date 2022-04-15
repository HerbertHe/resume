import { FC } from "react";

interface IIconProps {
    icon: string
    size?: number
}

const Icon: FC<IIconProps> = ({ icon, size = 20 }) => <span style={{ fontSize: size }}>
    <span className="iconify align-middle" data-icon={icon}></span>
</span>

export default Icon
