import './App.css'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import HighLights from './components/HighLights';
import Model from './components/Model';

function App() {

  return (
    <main className='bg-black'>
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
    </main>
  );
}

export default App
