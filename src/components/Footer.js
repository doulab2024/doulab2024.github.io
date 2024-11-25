import React from 'react';

// 地图组件
// const MapComponent = () => {
//     return (
//         <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
//             {/* 这里可以插入一个真实的地图API组件，如Google Maps或其他 */}
//             <p>Map Placeholder</p>
//         </div>
//     );
// };

// Footer 组件
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 border-t w-full">
            <div className="container mx-auto flex-r-n-fs-fs md:flex-row justify-between">

                <div className="w-1/3">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Dou Group</h3>
                    <p className="text-gray-600 mb-2">CAS Center for Excellence in Molecular Cell Science (CEMCS)</p>
                    <p className="text-gray-600 mb-2">Shanghai Institute of Biochemistry and Cell Biology (SIBCB)</p>
                    <p className="text-gray-600 mb-2">Chinese Academy of Sciences (CAS)</p>
                    <p className="text-gray-600">Address: 320 Yueyang Road, Shanghai 200031, P.R. China</p>
                </div>


                <div className="h-max w-2/3 pl-20">
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <div
                        className={'flex-r-n-fs-c w-full text-gray-600 mb-2'}
                    >
                        {/*<div*/}
                        {/*    className={'w-1/6'}*/}
                        {/*>*/}
                        {/*    PI:*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={'w-1/3'}*/}
                        {/*>*/}
                        {/*    A3 406*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={''}*/}
                        {/*>*/}
                        {/*    xiaoyang.dou@sibcb.ac.cn*/}
                        {/*</div>*/}
                        CAS Center for Excellence in Molecular Cell Science (Minhang Campus)
                    </div>
                    <div
                        className={'flex-r-n-fs-c w-full text-gray-600'}
                    >
                        {/*<div*/}
                        {/*    className={'w-1/6'}*/}
                        {/*>*/}
                        {/*    Lab Manager:*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={'w-1/3'}*/}
                        {/*>*/}
                        {/*    A3 4th floor public area*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={''}*/}
                        {/*>*/}
                        {/*    liuxinyu@sibcb.ac.cn*/}
                        {/*</div>*/}

                        Address: 109 Yuanmei Road, Minhang District, Shanghai 201109, P.R. China
                    </div>
                    <img
                        className={'w-full pt-5'}
                        src={'/pic/shxbs_logo.png'}
                    />
                </div>

            </div>
        </footer>
    );
};

export default Footer;
