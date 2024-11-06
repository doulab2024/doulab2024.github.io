import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";
import IDCard from "../components/IDCard";

const People =()=>{//sdfsfd
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'People'}
            isTopWhite={true}
        />
        <ThemePic imgSrc={'/pic/themePic1.png'}/>
        <div className={'h-32'}/>
        <div//这里是第一行，只存放PI信息
            className={'w-4/5 flex-r-n-fs-c mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/DXY.jpg'}
                name={'Xiaoyang Dou'}
                position={'PI, Professor in SIBAS'}
                intro={''}
            />
            <div
                className={'w-2/3 h-full flex-c-n-c-c text-justify pl-20 font-optima text-2xl font-bold'}
            >
                <div>Dr. Dou graduated from Hebei University of Economics and Business in 2011. She received her Ph.D. in Computational Biology from the CAS-MPG Partner Institute for Computational Biology (PICB) in 2018, followed by postdoctoral research at the University of Chicago until 2024. In July 2024, she established her own lab at the CAS Center for Excellence in Molecular Cell Science (Institute of Biochemistry and Cell Biology).</div>
            </div>
        </div>
        <div//这里是一行，一行存三个人物介绍(IDCard)
            className={'w-4/5 flex-r-n-c-fs mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/LXY.png'}
                name={'Xinyu Liu'}
                position={'Lab manager'}
                intro={''}
            />
            <IDCard
                imgSrc={'/avatar/CC.jpg'}
                name={'Chen Cao'}
                position={'Research assistant'}
                intro={''}
            />
            <IDCard
                imgSrc={'/avatar/LJJ.jpg'}
                name={'Jiajia Lin'}
                position={'Research assistant'}
                intro={''}
            />
        </div>
        <div//这里是一行，一行存三个人物介绍(IDCard)
            className={'w-4/5 flex-r-n-c-fs mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/LXML.jpg'}
                name={'Ximilan Luo'}
                position={'Graduate student'}
                intro={''}
            />
            <IDCard
                imgSrc={'/avatar/CZJ.png'}
                name={'Zijiao Chen'}
                position={'Graduate student'}
                intro={''}
            />
            <IDCard
                imgSrc={'/avatar/ZHY.jpg'}
                name={'Haoyu Zhao'}
                position={'Graduate student'}
                intro={''}
            />
        </div>
        <Footer/>
    </div>
}


export default People
