import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Overview from './components/Overview';

function App() {
  return (
    <section className="App w-full h-screen bg-darkestBlue flex justify-center items-start font-body relative">
      <section className="absolute w-full h-full grid grid-rows-two">
        <div className="h-full bg-darkBlue rounded-3xl rounded-t-none"></div>
        <div className="h-full"></div>
      </section>
      <section className="main flex flex-col p-4 gap-6 z-10">        
        <section className="app-header h-auto">
          <Header/>
        </section>
        <section className="app-main h-auto">
          <Main/>
        </section>
        <section className="app-overview h-auto">
        <Overview/>
      </section>        
      </section>
    </section>
  );
}

export default App;
