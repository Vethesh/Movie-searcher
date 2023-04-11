import React from 'react'
import Movies from './Movies';
import Search from "./Search";
// import { Appcontext } from './Context';
// import { useGlobal } from "./Context";
const Home = () => {
  
  return (
    <>
      <div>
        <h1>welcome to home page</h1>
        <Search />
        <Movies />
      </div>
    </>
  );
}

export default Home;