import React, {useEffect, useState} from 'react';
import Sidebar from './Components/Sidebar'
import Service from './Components/Service';
import Header from './Components/Header';
import { Switch, Route, useLocation } from 'react-router-dom'
import About from './Components/About';

import AllProjects from './Components/AllProjects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const ThemeContext = createContext();

function App() {
  const [data, setData] = useState();
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState)
  const head = document.getElementById('root');
  const imgList = document.getElementsByTagName('img');
  
  if(state){
    head.style.filter = 'invert(1) hue-rotate(100deg) saturate(1.2)';
  }
  else{
    head.style.filter = 'none'
  }
  
  useEffect(() => {
    fetch(`process.env.DataURI`).then(res => res.json()).then(response => setData(response));
  }, []);
  console.log('data', data);
  return (
    <>
    <ThemeContext.Provider value={{state, dispatch}}>
      <main>
        <Sidebar />
        <div className="main__inner">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Header data={data[0].personal} />
            </Route>
            <Route exact path="/about">
              <About about={data[0].personal} />
            </Route>
            <Route exact path="/skills">
              <Skills skills={data[0].skills} />
            </Route>
            <Route exact path="/service">
              <Service services={data[0].service} />
            </Route>
            <Route exact path="/projects">
              <AllProjects projects={data[0].projects} />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
