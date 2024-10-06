const ThemePic =({imgSrc})=>{
    return <div className="overflow-hidden w-full h-[40rem] relative">
        <img src={imgSrc} className="absolute w-full top-0 left-0" alt="Example Image"/>
    </div>
}

export default ThemePic

