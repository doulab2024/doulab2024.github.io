const Paper =({title, authors, journal, link})=>{
    return <div className="w-full flex-c-n-fs-fs mb-8 font-optima">
        <div className={'text-2xl font-bold text-main'}>{title}</div>
        <div className={'text-xl'}>
            <span className={''}>{authors}</span>
            <span className={'font-sans italic text-sub pl-2'}>{journal}</span>
            <span
                className={'cursor-pointer underline ml-2'}
                onClick={() => window.open(link, '_blank')}
            >
                [link]
            </span>
        </div>
    </div>
}

export default Paper

