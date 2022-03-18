import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
const HeaderWrapper = styled.header`
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, -80px, 0px)" : "translate3d(0px, 0px, 0px)"};
    backdrop-filter: ${(props) => props.scrollPos === 0 ? 'blur(0px);' : 'blur(5px);'};
    background-color: ${(props) => props.scrollPos === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.4)'};
`

const Header = (props) => {
    const [showHeader, setHeader] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        if (document.body.getBoundingClientRect().top === 0) {
            setHeader(true);
            setScrollPos(0);
        } else {
            setScrollPos(document.body.getBoundingClientRect().top);
            setHeader(document.body.getBoundingClientRect().top > scrollPos);
        }
    };

    return (
        <HeaderWrapper
            show={showHeader}
            scrollPos={scrollPos}
            className="h-20 pt-3 w-full flex flex-row justify-center items-center fixed top-0 left-0 right-0 z-10 box-border"
        >
            <section className="w-full max-w-screen-md flex justify-between items-center mx-4">
                <section className="flex items-center">
                    <Link href="/">
                        <a href="/" className="flex flex-row items-center no-underline text-2xl cursor-pointer select-none">
                            <h3 className="m-0 text-gray-700 dark:text-gray-50">NowNano</h3>
                        </a>
                    </Link>
                </section>
                <section className="flex items-center">
                   
                </section>
            </section>
        </HeaderWrapper>
    )
}

export default Header
