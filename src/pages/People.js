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
        <div//这里是一行，一行存三个人物介绍(IDCard)
            className={'w-4/5 flex-r-n-c-fs mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/ProfDou.png'}
                name={'Xiaoyang Dou, PI'}
                position={'Professor in SIBAS'}
                intro={'just some words to test aaa bbb ccc sdddddd gggg jjjjjj'}
            />
            <IDCard
                imgSrc={'/avatar/ProfDou.png'}
                name={'Xiaoyang Dou, PI'}
                position={'Professor in SIBAS'}
                intro={'just some words to test aaa bbb ccc sdddddd gggg jjjjjj'}
            />
            <IDCard
                imgSrc={'/avatar/ProfDou.png'}
                name={'Xiaoyang Dou, PI'}
                position={'Professor in SIBAS'}
                intro={'just some words to test aaa bbb ccc sdddddd gggg jjjjjj'}
            />
        </div>
        <div//这里是一行，一行存三个人物介绍(IDCard)
            className={'w-4/5 flex-r-n-c-fs mb-20'}
        >
            <IDCard
                imgSrc={'/avatar/ProfDou.png'}
                name={'Xiaoyang Dou, PI'}
                position={'Professor in SIBAS'}
                intro={'just some words to test aaa bbb ccc sdddddd gggg jjjjjj'}
            />
            <IDCard
                imgSrc={'/avatar/ProfDou.png'}
                name={'Xiaoyang Dou, PI'}
                position={'Professor in SIBAS'}
                intro={'just some words to test aaa bbb ccc sdddddd gggg jjjjjj'}
            />
            <IDCard
                imgSrc={'/avatar/ProfDou.png'}
                name={'Xiaoyang Dou, PI'}
                position={'Professor in SIBAS'}
                intro={'just some words to test aaa bbb ccc sdddddd gggg jjjjjj'}
            />
        </div>
        <Footer/>
    </div>
}


export default People
