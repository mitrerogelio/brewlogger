import ChildNav from './ChildNav'
import Footer from './Footer'
import React from "react";

interface ChildrenProps {
   children: React.ReactNode; 
}
const ChildPage = ({children}: ChildrenProps) => {
  return (
    <section>
      <ChildNav />
        {children}
      <Footer />
    </section>
  )
}

export default ChildPage