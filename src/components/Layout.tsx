import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface ChildrenProps {
    children: React.ReactNode;
}

const Layout = ({children}: ChildrenProps) => {
    return (
        <section>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </section>
    );
};

export default Layout;