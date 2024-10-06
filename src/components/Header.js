import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ currentPage, isTopWhite }) => {
    const [isAtTop, setIsAtTop] = useState(true);
    const navigate = useNavigate();

    // 监听滚动事件
    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        // 清除事件监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`flex z-max font-optima justify-between items-center px-8 py-4 fixed top-0 w-full transition-all duration-500 ${
                isAtTop ? 'bg-transparent h-20' : 'bg-white h-16 shadow'
            } fade-in`}
        >
            {/* 左侧图标 */}
            <div
                className="cursor-pointer transition-opacity duration-300 hover:opacity-50"
                onClick={() => navigate('/')}
            >
                <img src="shxbs_icon.png" alt="Logo" className="h-10" />
            </div>

            {/* 右侧页面按钮 */}
            <nav className="flex space-x-6">
                {['Home', 'People', 'Publication', 'Contact'].map((page) => (
                    <Link
                        key={page}
                        to={`/${page.toLowerCase()}`}
                        className={`cursor-pointer text-xl transition-all duration-300 hover:opacity-50 ${
                            isAtTop && isTopWhite
                                ? 'text-white border-white'
                                : 'text-black border-black'
                        } ${
                            currentPage === page
                                ? 'border-b-2'
                                : 'border-b-0'
                        }`}
                    >
                        {page}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;


