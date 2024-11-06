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
        <div className={'mt-32 w-4/5 flex-c-n-fs-fs'}>
            <div
                className={'font-sans text-xl text-justify mb-10'}
            >
                We are seeking passionate individuals to join our interdisciplinary team, where we integrate computational biology, biochemistry, and molecular biology to explore the contributions of non-coding regulatory RNAs and their chemical modifications to transcription and chromatin regulation. Our research investigates the causes and consequences of non-coding RNA dysregulation in human diseases, with a particular focus on neurodegenerative disorders, aging, and cancer.
            </div>
            <div
                className={'font-sans text-xl text-justify my-5'}
            >
                Our findings, published in prestigious journals such as <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41586-024-07969-x', '_blank')}>Nature (2024)</span>, <span className={'text-sub font-bold font-futura cursor-pointer italic hover-underline'} onClick={() => window.open('https://www.science.org/doi/full/10.1126/science.aay6018', '_blank')}>Science (2020</span>,<span className={'text-sub font-bold font-futura cursor-pointer hover-underline italic'} onClick={() => window.open('https://www.science.org/doi/abs/10.1126/science.abj9090', '_blank')}> 2023)</span>, <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41556-023-01213-w', '_blank')}>Nature Cell Biology (2023)</span>, <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41593-023-01374-9', '_blank')}>Nature Neuroscience (2023)</span>, and <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.cell.com/cancer-cell/fulltext/S1535-6108(23)00163-0', '_blank')}>Cancer Cell (2023)</span>, have significantly advanced our understanding of regulatory non-coding RNAs—especially repeat RNAs and their modifications—in processes such as embryonic development, leukemia, and neurodegenerative diseases. Our overarching goal is to identify novel RNA molecular targets and strategies for disease prevention, diagnosis, and treatment.
            </div>
            <div
                className={'font-sans text-xl text-justify my-5'}
            >
                We invite individuals with a strong interest in RNA biology and computational biology to join our team!
            </div>
            <div
                className={'text-2xl font-bold text-main font-optima my-5'}
            >
                For Research Associate Positions, successful applicants should have:
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                1. A Ph.D. degree.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                2. At least two years of postdoctoral training.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                3. A research background in biochemistry, molecular and cell biology, computational biology, bioinformatics, or related fields.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                4. Ambition, a collaborative spirit, and excellent scientific communication skills.
            </div>
            <div
                className={'text-2xl font-bold text-main font-optima my-5'}
            >
                For Postdoctoral Positions, successful applicants should have:
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                1. A Ph.D. degree.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                2. A research background in computational biology, bioinformatics, or related fields, or in biochemistry, molecular, and cell biology, pariticar with a focus on neurology and cancer biology.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                3. Strong ambition, a passion for scientific research, a teamwork spirit, and exceptional scientific communication abilities.
            </div>
            <div
                className={'text-2xl font-bold text-main font-optima my-5'}
            >
                For Research Assistant Positions, successful applicants should have:
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                1. A master's or bachelor’s degree.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                2. A research background in biochemistry, molecular and cell biology, or in computational biology and bioinformatics, or a related field.
            </div>
            <div
                className={'font-sans text-xl my-2'}
            >
                3. A passion for scientific research, teamwork spirit, and excellent scientific communication skills.
            </div>
            <div
                className={'font-sans text-xl text-justify my-5'}
            >
                We offer a competitive salary and benefits package, comparable to those in leading universities and industry, for motivated individuals capable of conducting outstanding research. Research Assistants will also have the opportunity to apply for a Ph.D. program.
            </div>
            <div
                className={'font-sans text-xl text-justify mt-5 mb-20'}
            >
                For immediate consideration, please submit your <span className={'font-bold text-sub font-futura'}>CV, two reference letters, and a cover letter</span> to Dr. Xiaoyang Dou at <span className={'font-bold text-sub font-futura'}>xiaoyang.dou@sibcb.ac.cn</span>.
            </div>
        </div>
        <Footer/>
    </div>
}


export default Positions
