import './App.css';
import MainNavigation from './components/MainNavigation';
import AllCards from './components/AllCards';
import Searcher from './components/Searcher';
import Footer from './components/Footer';

function App() {
  return (
    <div className = 'body'>
      <MainNavigation/>
      <main>
        <Searcher/>
        <AllCards/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
