import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemePic from "../components/ThemePic";
import Paper from "../components/Paper";

const Publication =()=>{
    return <div className={'h-max w-full flex-c-n-c-c'}>
        <Header
            currentPage={'Publication'}
            isTopWhite={true}
        />
        <ThemePic imgSrc={'/pic/themePic1.png'}/>
        <div className={'mt-32 w-4/5 flex-c-n-fs-fs'}>
            <div className={'font-futura text-3xl font-bold mb-14'}>2023</div>
            <Paper
                title={'RBFOX2 recognizes N6-methyladenosine to suppress transcription and block myeloid leukaemia differentiation.'}
                authors={'Dou, X.*, Xiao, Y. *, Shen, C. *, Wang, K. *, Wu, T., Liu, C., Li, Y., Yu, X., Liu, J., Dai, Q., Pajdzik, K., Ye, C., Ge, R., Gao, B., Yu, J., Sun, S., Chen, M., Chen, J., & He, C.'}
                journal={'Nature Cell Biology'}
                link={'https://www.nature.com/articles/s41556-023-01213-w'}
            />
            <Paper
                title={'RBFOX2 recognizes N6-methyladenosine to suppress transcription and block myeloid leukaemia differentiation.'}
                authors={'Dou, X.*, Xiao, Y. *, Shen, C. *, Wang, K. *, Wu, T., Liu, C., Li, Y., Yu, X., Liu, J., Dai, Q., Pajdzik, K., Ye, C., Ge, R., Gao, B., Yu, J., Sun, S., Chen, M., Chen, J., & He, C.'}
                journal={'Nature Cell Biology'}
                link={'https://www.nature.com/articles/s41556-023-01213-w'}
            />
            <Paper
                title={'RBFOX2 recognizes N6-methyladenosine to suppress transcription and block myeloid leukaemia differentiation.'}
                authors={'Dou, X.*, Xiao, Y. *, Shen, C. *, Wang, K. *, Wu, T., Liu, C., Li, Y., Yu, X., Liu, J., Dai, Q., Pajdzik, K., Ye, C., Ge, R., Gao, B., Yu, J., Sun, S., Chen, M., Chen, J., & He, C.'}
                journal={'Nature Cell Biology'}
                link={'https://www.nature.com/articles/s41556-023-01213-w'}
            />
        </div>
        <Footer/>
    </div>
}


export default Publication
