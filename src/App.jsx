import './App.css'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import HighLights from './components/HighLights';

function App() {

  return (
    <main className='bg-black'>
      <NavBar />
      <Hero />
      <HighLights />
    </main>
  );
}

export default App
