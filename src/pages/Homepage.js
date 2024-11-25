import Header from "../components/Header";
import Footer from "../components/Footer";

const Home =()=>{
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'Home'}
            isTopWhite={false}
        />
        <div className={'h-32'}/>
        <div className={'text-green text-2xl font-semibold font-optima pb-10'}>-- Welcome --</div>
        <div className={'text-6xl font-optima mb-4 font-bold'}>Dou Lab</div>
        <div className={'text-3xl font-optima mb-20 font-semibold'}>RNA modification and chromatin regulation, computational biology</div>
        <img
            className={'w-3/5 mb-20'}
            src={'/pic/homePagePic1.png'}
        />
        <div className={'flex-c-n-c-c w-3/5 font-sans text-justify text-lg mb-28'}>
            Non-coding RNAs and their chemical modifications serve as core regulatory factors within gene regulatory networks. They play crucial roles in the interactions between RNA and other biomolecules such as proteins, DNA, and other RNAs. These interactions are essential for regulating chromatin remodeling and gene transcription activation, which in turn affect a wide range of biological processes. Our research aims to deepen the understanding of regulatory non-coding RNAs and their chemical modifications, expanding their potential as molecular targets and strategies for disease prevention, diagnosis, and treatment.
            <div
                className={'flex-r-n-c-fs w-full text-left'}
            >
                <div
                    className={'flex-c-n-fs-c w-1/3 px-5 text-justify'}
                >
                    <img
                        className={'py-10'}
                        src={'/pic/homepageResearch1.png'}
                    />
                    We conduct in-depth explorations of the regulatory patterns, mechanisms, and biological functions of non-coding RNAs and their chemical modifications in chromatin remodeling and gene transcription activation.
                </div>
                <div
                    className={'flex-c-n-fs-c w-1/3 px-5 text-justify'}
                >
                    <img
                        className={'py-10'}
                        src={'/pic/homepageResearch2.png'}
                    />
                    We analyze the causes and consequences of abnormal metabolism of non-coding RNAs and their chemical modifications in human diseases, such as neurodegenerative disorders, cancer, and aging.                </div>
                <div
                    className={'flex-c-n-fs-c w-1/3 px-5 text-justify'}
                >
                    <img
                        className={'py-10'}
                        src={'/pic/homeP\pageResearch3.png'}
                    />
                    We investigate the fate-determining patterns or modules of non-coding through integrative data analysis and the application of artificial intelligence technology.                </div>
            </div>
        </div>
        <Footer/>
    </div>
}


export default Home
