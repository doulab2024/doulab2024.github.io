import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";


const Research =()=>{
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'Research'}
            isTopWhite={true}
        />
        <ThemePic imgSrc={'/pic/themePic1.png'}/>
        <div className={'mt-32 text-green text-2xl font-semibold font-optima pb-10'}>-- Our research --</div>
        <div className={'w-4/5 flex-c-n-fs-fs'}>
            <img
                className={'w-full my-10'}
                src={'/pic/research1.png'}
            />
            <div
                className={'text-main font-optima text-2xl font-bold mb-5 mt-10'}
            >
                m<sup>6</sup>A of chromosome-associated regulatory RNA regulates chromatin state and transcription
            </div>
            <div
                className={'font-sans text-xl text-justify'}
            >
                m<sup>6</sup>A methylation plays a crucial role in mouse embryonic development. Knockout of the m<sup>6</sup>A methyltransferase METTL3 results in embryonic lethality in mice, a phenotype closely resembling the effect of knocking out the nuclear m<sup>6</sup>A reader protein YTHDC1, indicating an essential nuclear function for m<sup>6</sup>A. Through analysis of m<sup>6</sup>A MeRIP-seq data for chromatin-associated RNAs, we found that these RNAs, particularly non-coding RNAs, undergo m<sup>6</sup>A methylation, with significantly reduced m<sup>6</sup>A levels upon METTL3 knockout. These non-coding RNAs are highly enriched at genomic regulatory elements, leading us to define them as chromatin-associated regulatory RNAs (carRNAs), which include promoter-associated RNAs (paRNAs), enhancer RNAs (eRNAs), and transposon-derived RNAs (repeat RNAs). Mechanistic studies reveal that m<sup>6</sup>A-methylated carRNAs are recognized by YTHDC1, which recruits the nuclear exosome targeting (NEXT) complex to mediate their degradation, resulting in chromatin silencing and repression of downstream gene transcription. Furthermore, by employing the dCas13b system, we confirmed the causal role of this regulatory pathway and its indispensable function in embryonic development <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.science.org/doi/full/10.1126/science.aay6018', '_blank')}>(Science 2020)</span>.
            </div>
            <div
                className={'text-main font-optima text-2xl font-bold mb-5 mt-10'}
            >
                RNA m<sup>5</sup>C oxidation by TET2 regulates chromatin state and leukaemogenesis
            </div>
            <div
                className={'font-sans text-xl text-justify'}
            >
                Mutation of tet methylcytosine dioxygenase 2 (encoded by TET2) drives myeloid malignancy initiation and progression. TET2 deficiency is known to cause a globally opened chromatin state and activation of genes contributing to aberrant haematopoietic stem cell self-renewal. However, the open chromatin observed in TET2-deficient mouse embryonic stem cells, leukaemic cells and haematopoietic stem and progenitor cells is inconsistent with the designated role of DNA 5-methylcytosine oxidation of TET2. Here we show that chromatin-associated retrotransposon RNA 5-methylcytosine (m<sup>5</sup>C) can be recognized by the methyl-CpG-binding-domain protein MBD6, which guides deubiquitination of nearby monoubiquitinated Lys119 of histone H2A (H2AK119ub) to promote an open chromatin state. TET2 oxidizes m<sup>5</sup>C and antagonizes this MBD6-dependent H2AK119ub deubiquitination. TET2 depletion thereby leads to globally decreased H2AK119ub, more open chromatin and increased transcription in stem cells. TET2-mutant human leukaemia becomes dependent on this gene activation pathway, with MBD6 depletion selectively blocking proliferation of TET2-mutant leukaemic cells and largely reversing the haematopoiesis defects caused by Tet2 loss in mouse models. Together, our findings reveal a chromatin regulation pathway by TET2 through retrotransposon RNA m<sup>5</sup>C oxidation and identify the downstream MBD6 protein as a feasible target for developing therapies specific against TET2 mutant malignancies <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41586-024-07969-x', '_blank')}>(Nature 2024)</span>.
            </div>
            <img
                className={'w-full my-10'}
                src={'/pic/research2.png'}
            />
            <div
                className={'font-sans text-xl text-justify'}
            >
                Chromatin binds various non-coding RNAs with regulatory functions, which are modified to varying degrees by m<sup>6</sup>A methylation. However, there is still a lack of understanding about the regulatory proteins that can specifically recognize these non-coding RNAs and their chemical modifications, thereby mediating changes in chromatin state and gene transcription activity. To address this gap, we conducted the first integrated analysis of large-scale protein binding data across the whole transcriptome and genome, as well as m<sup>6</sup>A methylation data of chromatin-associated RNAs, systematically identifying potential m<sup>6</sup>A regulatory proteins on chromatin-associated RNAs, including the classic alternative splicing factor RBFOX2. We discovered that RBFOX2, independently of its splicing function, specifically recognizes m<sup>6</sup>A-methylated chromatin-associated RNAs, particularly promoter-associated RNAs (paRNAs). RBFOX2 then recruits the m<sup>6</sup>A methyltransferase complex (MTC) to gene promoter regions via RBM15. At the same time, RBFOX2 interacts with YTHDC1 through RBM15, recruiting the polycomb repressive complex 2 (PRC2) to the promoter region, thereby initiating chromatin silencing and downstream gene transcriptional repression. Upon RBFOX2 knockdown, PRC2 binding to chromatin is significantly reduced, and this reduction occurs only at sites where RBM15 or YTHDC1 is bound, confirming that PRC2 recruitment to RBFOX2 binding sites requires the assistance of RBM15 and YTHDC1. Further studies revealed that in a patient-derived tumor xenotransplantation (PDX) model, knockdown of RBFOX2 not only significantly promoted the differentiation of acute leukemia cells but also markedly extended mouse survival. This effect is achieved by regulating the TGF-β signaling pathway through the m<sup>6</sup>A/RBM15/YTHDC1/PRC2 molecular mechanism <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41556-023-01213-w', '_blank')}>(Nature Cell Biology, 2023)</span>.
            </div>
            <img
                className={'w-full my-10'}
                src={'/pic/research3.png'}
            />
            <div
                className={'font-sans text-xl text-justify'}
            >
                In mammalian cells, m<sup>6</sup>A methylation exhibits significant regional selectivity across the transcriptome, with high enrichment near unusually long exons and stop codons. This selectivity is crucial for m<sup>6</sup>A-mediated gene regulation. However, our understanding of the underlying mechanisms remains limited. Using a high-throughput parallel reporter assay to measure m<sup>6</sup>A, the applicant and collaborators found that alternative splicing spatially hinders the m<sup>6</sup>A methyltransferase complex from accessing short exons, thereby inhibiting their m<sup>6</sup>A methylation. This process determines several key features of the transcriptome-wide specific distribution of m<sup>6</sup>A methylation. Consistently, when the exon junction complex (EJC) is knocked out, m<sup>6</sup>A levels rise significantly, particularly at sites on short exons and regions far from stop codons. Further computational analyses show that this structural characteristic of exons is highly conserved throughout vertebrate evolution, influencing both the distribution of m<sup>6</sup>A methylation and YTHDF2-mediated mRNA stability <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.science.org/doi/abs/10.1126/science.abj9090', '_blank')}>(Science, 2023)</span>.
            </div>
            <img
                className={'w-full my-10'}
                src={'/pic/research4.png'}
            />
            <div
                className={'text-main font-optima text-2xl font-bold mb-5 mt-10'}
            >
                Function of m<sup>6</sup>A in Cancer Immunotherapy
            </div>
            <div
                className={'font-sans text-xl text-justify'}
            >
                In the tumor microenvironment, immune suppression led by myeloid-derived suppressor cells (MDSCs) is a major barrier to the effectiveness of radiotherapy and combined radiotherapy-immunotherapy, closely linked to poor prognosis in cancer patients. The applicant and collaborators discovered that radiotherapy rapidly induces the upregulation of the m<sup>6</sup>A-binding protein YTHDF2 in MDSCs through NF-κB activation. This upregulation promotes the degradation of m<sup>6</sup>A-methylated mRNAs of NF-κB negative regulators, forming a positive feedback loop that further activates the NF-κB signaling pathway. This process significantly enhances MDSC differentiation, infiltration, and immunosuppressive function, reducing the effectiveness of radiotherapy. Further research showed that targeting and inhibiting YTHDF2 markedly improves the response rates to existing radiotherapy and combined radiotherapy-immunotherapy, offering a powerful and practical strategy to address immune suppression in tumor radiotherapy <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.cell.com/cancer-cell/fulltext/S1535-6108(23)00163-0', '_blank')}>(Cancer Cell, 2023)</span>.
            </div>
            <div
                className={'text-main font-optima text-2xl font-bold mb-5 mt-10'}
            >
                Function of m<sup>6</sup>A in Neurodegenerative Diseases
            </div>
            <div
                className={'font-sans text-xl text-justify'}
            >
                Amyotrophic lateral sclerosis (ALS) is a neurodegenerative disease that typically manifests in middle age, leading to muscle paralysis, with no effective treatment currently available. ALS shares similar pathology and genetics with frontotemporal dementia (FTD), often caused by abnormal expansion of the GGGGCC repeat sequence in the non-coding region of the C9ORF72 gene, accompanied by RNA metabolism abnormalities, though the underlying mechanisms remain unclear. We found that a significant reduction in m<sup>6</sup>A levels on mRNA in patient neurons is a key factor in this RNA metabolism abnormality. By restoring m<sup>6</sup>A levels, the expression of GGGGCC repeat RNA in patient neurons was effectively reduced, nuclear RNA aggregates decreased, expression of endogenous dipeptide repeat proteins reduced, and neurons resistance to excitotoxicity was enhanced, ultimately improving the survival of patient neurons <span className={'text-sub font-bold font-futura cursor-pointer italic'} onClick={() => window.open('https://www.nature.com/articles/s41593-023-01374-9', '_blank')}>(Nature Neuroscience, 2023)</span>.
            </div>
            <div className={'h-32'}/>
        </div>
        <Footer/>
    </div>
}


export default Research
