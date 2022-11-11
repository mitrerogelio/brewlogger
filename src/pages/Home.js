import Brewmethods from '../components/Brewmethods'
import Nav from '../components/Nav'
import Record from '../components/Record'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Nav />
      <h1 className='text-center text-5xl font-bold w-3/5 mx-auto mt-20'>Prepare Your Coffee</h1>
      <main className='flex flex-row flex-wrap justify-evenly mt-24'>
        <Brewmethods />
      </main>
      <Record />
      <Footer />
    </div>
  );
}
