import Brewmethod from './components/Brewmethod';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className='text-center text-5xl font-bold w-3/5 mx-auto mt-20'>Keep track of your favorite morning coffees</h1>
      <main className='flex flex-row flex-wrap justify-evenly mt-24'>
        <Brewmethod img="https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" name="French Press" description="Classic immersion brewer."/>
        <Brewmethod img="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2077&q=80" name="Hario V60" description="Found in every baristas toolkit."/>
        <Brewmethod img="https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2055&q=80"  name="Espresso" description="The best and worst brewer a barista can have."/>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
