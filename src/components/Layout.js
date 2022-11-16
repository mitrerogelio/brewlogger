import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <section>
        <Nav />
        <main>{children}</main>
        <Footer />
    </section>
  )
}

export default Layout