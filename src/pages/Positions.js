import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";


const Positions =()=>{
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'Positions'}
            isTopWhite={true}
        />
        <ThemePic imgSrc={'/pic/themePic1.png'}/>
        <div className={'mt-32 text-green text-2xl font-semibold font-optima pb-10'}>-- Join Our Team --</div>
        <div className={'w-4/5 flex-c-n-fs-fs'}>
            <div
                className={'font-sans text-xl text-justify mb-5'}
            >
                We are seeking passionate individuals to join our interdisciplinary team, which integrates computational biology, molecular biology, and biochemistry to explore the regulatory potential of non-coding RNAs and their chemical modifications in transcription and chromatin regulation. For more details, please refer to our recent publications in <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41586-024-07969-x', '_blank')}>Nature (2024)</span>, <span className={'text-sub font-bold font-futura cursor-pointer italic hover-underline'} onClick={() => window.open('https://www.science.org/doi/full/10.1126/science.aay6018', '_blank')}>Science (2020</span>,<span className={'text-sub font-bold font-futura cursor-pointer hover-underline italic'} onClick={() => window.open('https://www.science.org/doi/abs/10.1126/science.abj9090', '_blank')}> 2023)</span>, <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41556-023-01213-w', '_blank')}>Nature Cell Biology (2023)</span>, <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41593-023-01374-9', '_blank')}>Nature Neuroscience (2023)</span>, and <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.cell.com/cancer-cell/fulltext/S1535-6108(23)00163-0', '_blank')}>Cancer Cell (2023)</span>, have significantly advanced our understanding of regulatory non-coding RNAs—especially repeat RNAs and their modifications—in processes such as embryonic development, leukemia, and neurodegenerative diseases. Our overarching goal is to identify novel RNA molecular targets and strategies for disease prevention, diagnosis, and treatment.
            </div>
            <div
                className={'font-sans text-xl text-justify mb-5'}
            >
                Our research aims to uncover the causes and consequences of non-coding RNA dysregulation and their chemical modifications in human diseases, with a particular focus on neurodegenerative disorders, aging, and cancer. Our ultimate goal is to identify novel RNA molecular targeting principles or targets and develop innovative strategies for disease prevention, diagnosis, and treatment.
            </div>
            <div
                className={'text-2xl font-bold text-main font-optima my-5'}
            >
                We are actively recruiting great people with either wet lab or dry lab backgrounds to join our team!
            </div>
            <div
                className={'font-sans text-xl mb-5'}
            >
                For <span className={'text-sub font-bold font-futura'} >Research Associate</span> and <span className={'text-sub font-bold font-futura'} >Postdoctoral</span> candidates, please email Dr. Xiaoyang Dou directly with your CV, a cover letter describing your past research and future research goals, and the contact information of three references.
            </div>
            <div
                className={'font-sans text-xl mb-5'}
            >
                For <span className={'text-sub font-bold font-futura'} >Research Assistant</span> candidates, please email Dr. Xiaoyang Dou directly with your CV, a cover letter describing your past research experience and future research goals, and the contact information of two references. Research Assistant candidates will also have the opportunity to apply for a Ph.D. program.
            </div>
            <div
                className={'font-sans text-xl mb-40'}
            >
                Successful applicants should have a research background in biochemistry, molecular and cell biology, or related fields (wet lab); or in bioinformatics, computational biology, statistics, or related fields (dry lab). Expertise in neurobiology or cancer biology or related fields is highly desirable. Applicants should demonstrate a strong passion for scientific research, a collaborative spirit, and excellent scientific communication skills.
            </div>
        </div>
        <Footer/>
    </div>
}


export default Positions
