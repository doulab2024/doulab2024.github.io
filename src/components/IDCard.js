const IDCard =({imgSrc, name, position, intro})=>{
    // return <div className="w-1/3 px-3 flex-c-n-fs-c">
    //     <div
    //         className={'w-full overflow-hidden aspect-[1/1] relative mb-3'}
    //     >
    //         <img src={imgSrc} className="absolute w-full top-0 left-0" alt="Example Image"/>
    //     </div>
    //     <div className={'font-optima text-3xl font-bold text-main'}>{name}</div>
    //     <div className={'text-xl font-futura text-sub italic my-2'}>{position}</div>
    //     <div className={'font-sans'}>{intro}</div>
    // </div>

    return <div className="w-1/3 px-3 flex-c-n-fs-c">
        <div
            className={'w-full mb-3'}
        >
            <img src={imgSrc} className="" alt="Example Image"/>
        </div>
        <div className={'font-optima text-3xl font-bold text-main'}>{name}</div>
        <div className={'text-2xl font-futura text-sub italic my-2'}>{position}</div>
        <div className={'text-xl font-sans'}>{intro}</div>
    </div>
}

export default IDCard

