import ChildNav from './ChildNav'
import Footer from './Footer'

const ChildPage = ({children}) => {
  return (
    <section>
      <ChildNav />
        {children}
      <Footer />
    </section>
  )
}

export default ChildPage