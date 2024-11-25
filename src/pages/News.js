import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";
import Event from "../components/Event";


const News =()=>{
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'News'}
            isTopWhite={true}
        />
        <ThemePic imgSrc={'/pic/themePic1.png'}/>
        <div className={'mt-32 text-green text-2xl font-semibold font-optima pb-10'}>-- News --</div>
        <div className={'w-4/5 flex-c-n-fs-fs'}>
            <div className={'h-16'}/>
            <Event
                date={'11/01/2024'}
                content={'Exciting news! The lab moved from 320 Yueyang Road in Xuhui District to 109 Yuan Mei Road in Minhang District.'}
            />
            <Event
                date={'07/01/2024'}
                content={'Xiaoyang established her lab at the CEMCS, CAS'}
            />
            <div className={'h-32'}/>
        </div>
        <Footer/>
    </div>
}


export default News
