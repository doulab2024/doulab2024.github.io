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
        <div className={'text-green text-4xl font-semibold font-optima pb-10'}>—————— Meet Our Team ——————</div>
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
                className={'w-2/3 h-full flex-c-n-fs-fs text-justify pl-20 font-sans text-l'}
            >
                <div className={'font-optima text-3xl font-bold text-main'}>XIAOYANG DOU, PH.D.</div>
                <div className={'font-optima text-3xl font-bold pb-4'}>PRINCIPAL INVESTIGATOR</div>
                <div className={'text-2xl pb-4'}>xiaoyang.dou@sibcb.ac.cn</div>
                <div
                    className={''}
                >
                    Xiaoyang Dou is a faculty member at the CAS Center for Excellence in Molecular Cell Science (Institute of Biochemistry and Cell Biology). She received her B.S. in Biotechnology from Hebei University of Economics and Business and her Ph.D. in Computational Biology from the CAS-MPG Partner Institute for Computational Biology (PICB), under the supervision of Professor Jing-Dong Jackie Han. Following her postdoctoral research at the University of Chicago with Professors Chuan He and Mengjie Chen, Xiaoyang established her lab in July 2024.
                </div>
                <div className={'font-optima text-2xl font-bold pb-2 pt-5 text-main'}>Work Experience</div>
                <div>2024-present, Principal Investigator, CAS Center for Excellence in Molecular Cell Science</div>
                <div>2018-2024, Postdoctoral Researcher, University of Chicago</div>
                <div className={'font-optima text-2xl font-bold pb-2 pt-5 text-main'}>Education</div>
                <div>2011-2018, Ph.D. Computational Biology, CAS-MPG Partner Institute for Computational Biology</div>
                <div>2007-2011, B.S. Biotechnology, Hebei University of Economics and Business</div>
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
