import Brewmethods from '../components/Brewmethods'
import Record from '../components/Record'
import Layout from '../components/Layout'

export const Home = () => {
  return (
    <div>
      <Layout>
        <h1 className='text-center text-5xl font-bold w-3/5 mx-auto mt-20'>Prepare Your Coffee</h1>
        <nav className='flex flex-row flex-wrap justify-evenly mt-24'>
          <Brewmethods />
        </nav>
        <Record />
      </Layout>
    </div>
  );
}
