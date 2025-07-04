
import React, { Suspense } from 'react';
import './App.css';
// import Lazyloading from './component/Lazyloading';
const Lazy= React.lazy(()=>import('./component/Lazyloading'))

function App() {
  return (
    <>
    <h1 className='App'> Lazy Loading (Suspense Fallback ) </h1>
    <Suspense fallback={ <h3 className='App'>  Data is Loading ...</h3>}>
       <Lazy/>
    </Suspense>
    




    </>
  );
}

export default App;
