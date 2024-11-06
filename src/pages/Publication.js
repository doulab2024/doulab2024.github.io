import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";
import Paper from "../components/Paper";

const Publication =()=>{
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'Publications'}
            isTopWhite={true}
        />
        <ThemePic imgSrc={'/pic/themePic1.png'}/>
        <div className={'mt-32 w-4/5 flex-c-n-fs-fs'}>
            <div className={'font-futura text-3xl font-bold mb-5'}>Google scholar</div>
            <div
                className={'cursor-pointer underline mb-20'}
                onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=MuXZTEgAAAAJ&view_op=list_works&sortby=pubdate', '_blank')}
            >
                https://scholar.google.com/citations?hl=en&user=MuXZTEgAAAAJ&view_op=list_works&sortby=pubdate
            </div>
            <div className={'font-futura text-3xl font-bold mb-14'}>2024</div>
            <Paper
                title={'RNA m5C oxidation by TET2 regulates chromatin state and leukaemogenesis'}
                authors={'Zhongyu Zou*, Xiaoyang Dou*, Ying Li*, Zijie Zhang, Juan Wang, Boyang Gao, Yu Xiao, Yiding Wang, Lijie Zhao, Chenxi Sun, Qinzhe Liu, Xianbin Yu, Hao Wang, Juyeong Hong, Qing Dai, Feng-Chun Yang, Mingjiang Xu, Chuan He'}
                journal={'Nature'}
                link={'https://www.nature.com/articles/s41586-024-07969-x'}
            />

            <Paper
                title={'IGF2BP3 promotes mRNA degradation through internal m7G modification'}
                authors={'Chang Liu*, Xiaoyang Dou*, Yutao Zhao*, Linda Zhang, Lisheng Zhang, Qing Dai, Jun Liu, Tong Wu, Yu Xiao, Chuan He'}
                journal={'Nature Communications'}
                link={'https://www.nature.com/articles/s41467-024-51634-w'}
            />

            <Paper
                title={'Chemical manipulation of m1A mediates its detection in human tRNA'}
                authors={'Kinga Pajdzik*, Ruitu Lyu*, Xiaoyang Dou*, Chang Ye, Li-Sheng Zhang, Qing Dai, Chuan He'}
                journal={'RNA'}
                link={'https://rnajournal.cshlp.org/content/30/5/548.short'}
            />

            <Paper
                title={'Zebrafish Mbd5 binds to RNA m5C and regulates histone deubiquitylation and gene expression in development metabolism and behavior'}
                authors={'Jianhua Guo*, Zhongyu Zou*, Xiaoyang Dou, Xiang Zhao, Yimin Wang, Liqiang Wei, Yan Pi, Yi Wang, Chuan He, Su Guo'}
                journal={'Nucleic Acids Research'}
                link={'https://academic.oup.com/nar/article/52/8/4257/7608825'}
            />

            <Paper
                title={'KARR-seq reveals cellular higher-order RNA structures and RNA–RNA interactions'}
                authors={'Tong Wu*, Anthony Youzhi Cheng*, Yuexiu Zhang, Jiayu Xu, Jinjun Wu, Li Wen, Xiao Li, Bei Liu, Xiaoyang Dou, Pingluan Wang, Linda Zhang, Jingyi Fei, Jianrong Li, Zhengqing Ouyang, Chuan He'}
                journal={'Nature Biotechnology'}
                link={'https://www.nature.com/articles/s41587-023-02109-8'}
            />

            <Paper
                title={'Profiling of RNA-binding protein binding sites by in situ reverse transcription-based sequencing'}
                authors={'Yu Xiao*, Yan-Ming Chen*, Zhongyu Zou, Chang Ye, Xiaoyang Dou, Jinjun Wu, Chang Liu, Shun Liu, Hao Yan, Pingluan Wang, Tie-Bo Zeng, Qinzhe Liu, Jingyi Fei, Weixin Tang, Chuan He'}
                journal={'Nature Methods'}
                link={'https://www.nature.com/articles/s41592-023-02146-w'}
            />

            <div className={'font-futura text-3xl font-bold mb-14'}>2023</div>

            <Paper
                title={'Epitranscriptional regulation of TGF-β pseudoreceptor BAMBI by m6A/YTHDF2 drives extrinsic radioresistance'}
                authors={'Liangliang Wang, Wei Si, Xianbin Yu, Andras Piffko, Xiaoyang Dou, Xingchen Ding, Jason Bugno, Kaiting Yang, Chuangyu Wen, Linda Zhang, Dapeng Chen, Xiaona Huang, Jiaai Wang, Ainhoa Arina, Sean Pitroda, Steven J Chmura, Chuan He, Hua Laura Liang, Ralph Weichselbaum'}
                journal={'Journal of Clinical Investigation'}
                link={'https://www.jci.org/articles/view/172919'}
            />

            <Paper
                title={'Dysregulation of the Epitranscriptomic Mark m1A in Ischemic Stroke'}
                authors={'Anil K Chokkalla, Kinga Pajdzik, Xiaoyang Dou, Qing Dai, Suresh L Mehta, Vijay Arruri, Raghu Vemuganti'}
                journal={'Translational Stroke Research'}
                link={'https://link.springer.com/article/10.1007/s12975-022-01056-x'}
            />

            <Paper
                title={'METTL14 is a chromatin regulator independent of its RNA N6-methyladenosine methyltransferase activity'}
                authors={'Xiaoyang Dou*, Lulu Huang*, Yu Xiao*, Chang Liu, Yini Li, Xinning Zhang, Lishan Yu, Ran Zhao, Lei Yang, Chuan Chen, Xianbin Yu, Boyang Gao, Meijie Qi, Yawei Gao, Bin Shen, Shuying Sun, Chuan He, Jun Liu'}
                journal={'Protein & Cell'}
                link={'https://doi.org/10.1093/procel/pwad009'}
            />

            <Paper
                title={'RBFOX2 recognizes N6-methyladenosine to suppress transcription and block myeloid leukaemia differentiation'}
                authors={'Xiaoyang Dou*, Yu Xiao*, Chao Shen*, Kitty Wang*, Tong Wu, Chang Liu, Yini Li, Xianbin Yu, Jun Liu, Qing Dai, Kinga Pajdzik, Chang Ye, Ruiqi Ge, Boyang Gao, Jianhua Yu, Shuying Sun, Mengjie Chen, Jianjun Chen, Chuan He'}
                journal={'Nature Cell Biology'}
                link={'https://www.nature.com/articles/s41556-023-01213-w'}
            />

            <Paper
                title={'Globally reduced N6-methyladenosine (m6A) in C9ORF72-ALS/FTD dysregulates RNA metabolism and contributes to neurodegeneration'}
                authors={'Yini Li*, Xiaoyang Dou*, Jun Liu*, Yu Xiao, Zhe Zhang, Lindsey Hayes, Rong Wu, Xiujuan Fu, Yingzhi Ye, Bing Yang, Lyle W Ostrow, Chuan He, Shuying Sun'}
                journal={'Nature neuroscience'}
                link={'https://www.nature.com/articles/s41593-023-01374-9'}
            />

            <Paper
                title={'YTHDF2/m6A/NF‐κB axis controls anti‐tumor immunity by regulating intratumoral Tregs'}
                authors={'Linda Zhang, Xiaoyang Dou, Zhong Zheng, Chang Ye, Thomas X Lu, Hua L Liang, Liangliang Wang, Ralph R Weichselbaum, Chuan He'}
                journal={'The EMBO Journal'}
                link={'https://doi.org/10.15252/embj.2022113126'}
            />

            <Paper
                title={'YTHDF2 inhibition potentiates radiotherapy antitumor efficacy'}
                authors={'Liangliang Wang*, Xiaoyang Dou*, Shijie Chen*, Xianbin Yu, Xiaona Huang, Linda Zhang, Yantao Chen, Jiaai Wang, Kaiting Yang, Jason Bugno, Sean Pitroda, Xingchen Ding, Andras Piffko, Wei Si, Chao Chen, Hualiang Jiang, Bing Zhou, Steven J Chmura, Cheng Luo, Hua Laura Liang, Chuan He, Ralph R Weichselbaum'}
                journal={'Cancer Cell'}
                link={'https://www.cell.com/cancer-cell/fulltext/S1535-6108(23)00163-0'}
            />

            <Paper
                title={'Quantitative sequencing using BID-seq uncovers abundant pseudouridines in mammalian mRNA at base resolution'}
                authors={'Qing Dai*, Li-Sheng Zhang*, Hui-Lung Sun*, Kinga Pajdzik*, Lei Yang, Chang Ye, Cheng-Wei Ju, Shun Liu, Yuru Wang, Zhong Zheng, Linda Zhang, Bryan T Harada, Xiaoyang Dou, Iryna Irkliyenko, Xinran Feng, Wen Zhang, Tao Pan, Chuan He'}
                journal={'Nature Biotechnology'}
                link={'https://www.nature.com/articles/s41587-022-01505-w'}
            />

            <Paper
                title={'Exon architecture controls mRNA m6A suppression and gene expression'}
                authors={'P Cody He*, Jiangbo Wei*, Xiaoyang Dou*, Bryan T Harada*, Zijie Zhang, Ruiqi Ge, Chang Liu, Li-Sheng Zhang, Xianbin Yu, Shuai Wang, Ruitu Lyu, Zhongyu Zou, Mengjie Chen, Chuan He'}
                journal={'Science'}
                link={'https://www.science.org/doi/abs/10.1126/science.abj9090'}
            />

            <div className={'font-futura text-3xl font-bold mb-14'}>2022</div>

            <Paper
                title={'Nuclear m6A reader YTHDC1 regulates the scaffold function of LINE1 RNA in mouse ESCs and early embryos'}
                authors={'Chuan Chen, Wenqiang Liu, Guo Jiayin, Yuanyuan Liu, Xuelian Liu, Jun Liu, Dou Xiaoyang, Le Rongrong, Yixin Huang, Chong Li, Yang Lingyue, Kou Xiaochen, Yanhong Zhao, You Wu, Jiayu Chen, Hong Wang, Bin Shen, Gao Yawei, Gao Shaorong'}
                journal={'Protein & Cell'}
                link={'https://doi.org/10.1007/s13238-021-00853-8'}
            />

            <Paper
                title={'FTO mediates LINE1 m6A demethylation and chromatin regulation in mESCs and mouse development'}
                authors={'Jiangbo Wei*, Xianbin Yu*, Lei Yang*, Xuelian Liu*, Boyang Gao, Boxian Huang, Xiaoyang Dou, Jun Liu, Zhongyu Zou, Xiao-Long Cui, Li-Sheng Zhang, Xingsen Zhao, Qinzhe Liu, P Cody He, Caraline Sepich-Poore, Nicole Zhong, Wenqiang Liu, Yanhe Li, Xiaochen Kou, Yanhong Zhao, You Wu, Xuejun Cheng, Chuan Chen, Yiming An, Xueyang Dong, Huanyu Wang, Qiang Shu, Ziyang Hao, Tao Duan, Yu-Ying He, Xuekun Li, Shaorong Gao, Yawei Gao, Chuan He'}
                journal={'Science'}
                link={'https://www.science.org/doi/abs/10.1126/science.abe9582'}
            />

            <div className={'font-futura text-3xl font-bold mb-14'}>2020</div>

            <Paper
                title={'N6-deoxyadenosine methylation in mammalian mitochondrial DNA'}
                authors={'Ziyang Hao*, Tong Wu*, Xiaolong Cui, Pingping Zhu, Caiping Tan, Xiaoyang Dou, Kai-Wen Hsu, Yueh-Te Lin, Pei-Hua Peng, Li-Sheng Zhang, Yawei Gao, Lulu Hu, Hui-Lung Sun, Allen Zhu, Jianzhao Liu, Kou-Juey Wu, Chuan He'}
                journal={'Molecular cell'}
                link={' https://www.cell.com/molecular-cell/fulltext/S1097-2765(20)30111-8'}
            />

            <Paper
                title={'DNA 5-methylcytosine-specific amplification and sequencing'}
                authors={'Chang Liu*, Xiaolong Cui*, Boxuan Simen Zhao*, Pradnya Narkhede, Yawei Gao, Jun Liu, Xiaoyang Dou, Qing Dai, Li-Sheng Zhang, Chuan He'}
                journal={'Journal of the American Chemical Society'}
                link={'https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/32077696/'}
            />

            <Paper
                title={'N6-methyladenosine of chromosome-associated regulatory RNA regulates chromatin state and transcription'}
                authors={'Jun Liu*, Xiaoyang Dou*, Chuanyuan Chen*, Chuan Chen, Chang Liu, Meng Michelle Xu, Siqi Zhao, Bin Shen, Yawei Gao, Dali Han, Chuan He'}
                journal={'Science'}
                link={'https://www.science.org/doi/full/10.1126/science.aay6018'}
            />

            <div className={'font-futura text-3xl font-bold mb-14'}>2013-2019</div>

            <Paper
                title={'The strand-biased mitochondrial DNA methylome and its regulation by DNMT3A'}
                authors={'Xiaoyang Dou, Jerome D Boyd-Kirkup, Joseph McDermott, Xiaoli Zhang, Fang Li, Bowen Rong, Rui Zhang, Bisi Miao, Peilin Chen, Hao Cheng, Jianhuang Xue, David Bennett, Jiemin Wong, Fei Lan, Jing-Dong J Han'}
                journal={'Genome Research'}
                link={'https://genome.cshlp.org/content/29/10/1622.short'}
            />

            <Paper
                title={'Impact of dietary interventions on noncoding RNA networks and mRNAs encoding chromatin-related factors'}
                authors={'Christopher D Green*, Yi Huang*, Xiaoyang Dou*, Liu Yang, Yong Liu, Jing-Dong J Han'}
                journal={'Cell reports'}
                link={'https://www.cell.com/cell-reports/fulltext/S2211-1247(17)30318-2'}
            />

            <Paper
                title={'Understanding super-enhancers'}
                authors={'Hao Cheng, Xiaoyang Dou, J Han Jing-dong'}
                journal={'Science China. Life Sciences'}
                link={'https://dx.doi.org/10.1007/s11427-016-5028-3'}
            />

            <Paper
                title={'Genome-wide analysis of histone acetylation dynamics during mouse embryonic stem cell neural differentiation'}
                authors={'Pingyu Liu, Xiaoyang Dou, Guangdun Peng, Jing-Dong Jackie Han, Naihe Jing'}
                journal={'Genomics Data'}
                link={'https://doi.org/10.1016/j.gdata.2015.05.001'}
            />

            <Paper
                title={'Histone deacetylation promotes mouse neural induction by restricting Nodal-dependent mesendoderm fate'}
                authors={'Pingyu Liu, Xiaoyang Dou, Chang Liu, Lingbo Wang, Can Xing, Guangdun Peng, Jun Chen, Fang Yu, Yunbo Qiao, Lu Song, Yuxuan Wu, Chunmei Yue, Jinsong Li, Jing-Dong J Han, Ke Tang, Naihe Jing'}
                journal={'Nature communications'}
                link={' https://www.nature.com/articles/ncomms7830'}
            />

            <Paper
                title={'Integrative Epigenomics'}
                authors={'Ming Su, Xiaoyang Dou, Hao Cheng, Jing-Dong J Han'}
                journal={'Computational and Statistical Epigenomics'}
                link={'https://link.springer.com/chapter/10.1007/978-94-017-9927-0_6'}
            />

            <Paper
                title={'Integrating genomic, epigenomic, and transcriptomic features reveals modular signatures underlying poor prognosis in ovarian cancer'}
                authors={'Wei Zhang, Yi Liu, Na Sun, Dan Wang, Jerome Boyd-Kirkup, Xiaoyang Dou, Jing-Dong Jackie Han'}
                journal={'Cell reports'}
                link={'https://www.cell.com/cell-reports/fulltext/S2211-1247(13)00357-4?script=true&code=cell-site'}
            />


        </div>
        <Footer/>
    </div>
}


export default Publication
