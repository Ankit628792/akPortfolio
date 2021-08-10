import React from 'react';
import Sidebar from './Components/Sidebar'
import Service from './Components/Service';
import Header from './Components/Header';
import { Switch, Route, useLocation } from 'react-router-dom'
import About from './Components/About';
import data from './data'

import AllProjects from './Components/AllProjects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const ThemeContext = createContext();

function App() {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState)
  const head = document.getElementById('root');
  const imgList = document.getElementsByTagName('img');
  console.log(imgList)
  // imgList.map((item) => console.log(item))
  if(state){
    head.style.filter = 'invert(1) hue-rotate(100deg) saturate(1.2)';
    // imgList.style.filter = 'invert(1) saturate(1) hue-rotate(-100deg) !important'
  }
  else{
    head.style.filter = 'none'
    // imgList.style.filter = 'none'
  }
  console.log(state)
  return (
    <>
    <ThemeContext.Provider value={{state, dispatch}}>
      <main>
        <Sidebar />
        <div className="main__inner">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Header data={data.personal} />
            </Route>
            <Route exact path="/about">
              <About about={data.personal} />
            </Route>
            <Route exact path="/skills">
              <Skills skills={data.skills} />
            </Route>
            <Route exact path="/service">
              <Service services={data.service} />
            </Route>
            <Route exact path="/projects">
              <AllProjects projects={data.projects} />
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
