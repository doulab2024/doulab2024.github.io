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
            <div className="container mx-auto flex-r-n-fs-c md:flex-row justify-between">

                <div className="w-1/4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Dou Group</h3>
                    <p className="text-gray-600 mb-2">320 Yueyang Road, Xuhui District, Shanghai, 200031, China</p>
                    <p className="text-gray-600 mb-2">中国上海市徐汇区岳阳路320号</p>
                    <p className="text-gray-600">Email: xiaoyang.dou@sibcb.ac.cn</p>
                </div>


                <div className="mb-6 md:mb-0 w-3/4 px-20">
                    <img
                        className={'w-full'}
                        src={'/pic/shxbs_logo.png'}
                    />
                </div>

            </div>
        </footer>
    );
};

export default Footer;
