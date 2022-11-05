import Brewmethod from './components/Brewmethod';
import Nav from './components/Nav';
import Record from './components/Record';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className='text-center text-5xl font-bold w-3/5 mx-auto mt-20'>Prepare Your Coffee</h1>
      <main className='flex flex-row flex-wrap justify-evenly mt-24'>
        <Brewmethod img="https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" name="French Press" />
        <Brewmethod img="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2077&q=80" name="Hario V60" />
        <Brewmethod img="https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2055&q=80"  name="Espresso" />
        <Brewmethod img="https://images.unsplash.com/photo-1574359172160-c7ae4fadcacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2051&q=80"  name="Chemex" />
        <Brewmethod img="https://images.unsplash.com/photo-1643241274488-832af484e770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"  name="Aeropress" />
        <Brewmethod img="https://coffeerem.com/wp-content/uploads/2020/03/BTBL9603-compressed-2048x2048.jpg"  name="Hario Switch" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
