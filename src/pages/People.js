import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";
import IDCard from "../components/IDCard";

const People =()=>{//sdfsfd
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'People'}
            isTopWhite={false}
        />
        {/*<ThemePic imgSrc={'/pic/themePic1.png'}/>*/}
        <div className={'h-32'}/>
        <div className={'text-green text-4xl font-semibold font-optima pb-10'}>--- Meet our team ---</div>
        <div//这里是第一行，只存放PI信息
            className={'w-4/5 flex-r-n-fs-c mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/DXY.png'}
                name={''}
                position={''}
                intro={''}
            />
            <div
                className={'w-2/3 h-full flex-c-n-fs-fs text-justify pl-20 font-sans text-xl'}
            >
                <div className={'font-optima text-3xl font-bold text-main'}>XIAOYANG DOU, PH.D.</div>
                <div className={'font-optima text-3xl font-bold pb-4'}>PRINCIPAL INVESTIGATOR</div>
                <div className={'text-2xl pb-4'}>xiaoyang.dou@sibcb.ac.cn</div>
                <div>Xiaoyang Dou is a faculty member at the CAS Center for Excellence in Molecular Cell Science (Institute of Biochemistry and Cell Biology). She established her own lab in June 2024 and moved to the Minghan Campus in November 2024 after joining the Key Laboratory of RNA Innovation, Science, and Engineering (RISE). Xiaoyang received her B.S. in Biotechnology from Hebei University of Economics and Business and her Ph.D. in Computational Biology from the CAS-MPG Partner Institute for Computational Biology (PICB), under the supervision of Professor Jing-Dong Jackie Han. She conducted postdoctoral research at the University of Chicago with Professor Chuan He and Mengjie Chen.</div>
            </div>
        </div>
        <div//这里是一行，一行存三个人物介绍(IDCard)
            className={'w-4/5 flex-r-n-c-fs mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/LXY.png'}
                name={'Xinyu Liu'}
                position={'Lab manager'}
                intro={'liuxinyu@sibcb.ac.cn'}
            />
            <IDCard
                imgSrc={'/avatar/CC.png'}
                name={'Chen Cao'}
                position={'Research assistant'}
                intro={'caochen@sibcb.ac.cn'}
            />
            <IDCard
                imgSrc={'/avatar/LJJ.png'}
                name={'Jiajia Lin'}
                position={'Research assistant'}
                intro={'linjiajia@sibcb.ac.cn'}
            />
        </div>
        <div//这里是一行，一行存三个人物介绍(IDCard)
            className={'w-4/5 flex-r-n-c-fs mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/LXML.png'}
                name={'Ximilan Luo'}
                position={'Graduate student'}
                intro={'luoximilan2024@sibcb.ac.cn'}
            />
            <IDCard
                imgSrc={'/avatar/CZJ.png'}
                name={'Zijiao Chen'}
                position={'Graduate student'}
                intro={'chenzijiao2024@sibcb.ac.cn'}
            />
            <IDCard
                imgSrc={'/avatar/ZHY.png'}
                name={'Haoyu Zhao'}
                position={'Graduate student'}
                intro={'zhaohaoyu2024@sicbc.ac.cn'}
            />
        </div>
        <Footer/>
    </div>
}


export default People
