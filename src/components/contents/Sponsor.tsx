import Icon from "../boxs/Icon"

const Sponsor = () => <div className="mt-3">
    <p>Buy me a coffee~</p>
    <ul className="flex flex-row">
        <li className="p-1">
            <a href="https://www.patreon.com/HerbertHe" title="Patreon">
                <Icon icon="bxl:patreon" />
            </a>
        </li>
        <li className="p-1" title="ETH">
            <a href="https://etherscan.io/address/0x02e6C8FC9DC3E1783C9242248Dd007038004e08B" title="0x02e6C8FC9DC3E1783C9242248Dd007038004e08B">
                <Icon icon="cib:ethereum" />
            </a>

        </li>
    </ul>
</div>

export default Sponsor
