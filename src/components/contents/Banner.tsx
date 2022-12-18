interface IBanner {
    title: string
    url: string
}

const banners: IBanner[] = [
    { title: "Blog", url: "https://goer.icu" },
    { title: "Idea", url: "https://idea.goer.icu" },
    { title: "Liandi", url: "https://ld246.com/member/HerbertHe" },
]

const Banner = () => <ul className="w-full flex flex-row justify-start items-center">
    {banners.map(({ title, url }, idx) => <li key={url} className="font-light">
        <a href={url} title={title} className="m-2 underline underline-dotted hover:(underline-solid)">{title}</a>
        { idx !== banners.length - 1 && <span className="m-2">·</span> }
    </li>)}
</ul>

export default Banner
