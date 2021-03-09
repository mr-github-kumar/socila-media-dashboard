
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Overview from './components/Overview';

function App() {

  const [isActive, setActive] = useState(true);

  const changeTheme = () => {
      setActive(!isActive);
    }    
   

  return (
    <section className={isActive?'dark':''}>
      <section className="w-screen h-full sm:h-screen bg-white dark:bg-darkestBlue flex sm:justify-center sm:items-start font-body relative">
        <div className="sm:absolute sm:h-1/4 w-full bg-paleBlue dark:bg-darkBlue rounded-3xl rounded-t-none hidden sm:block"></div>
        <section className="main w-full sm:h-full flex flex-col gap-6 p-4 z-10 items-center max-w-4xl">        
          <section className="app-header">
            <Header action={changeTheme}/>
          </section>
          <section className="app-main">
            <Main/>
          </section>
          <section className="app-overview">
            <Overview/>
          </section>        
        </section>
      </section>
    </section>
  );
}

export default App;
