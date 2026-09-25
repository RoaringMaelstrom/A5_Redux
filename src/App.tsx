import { Suspense } from 'react';

import Banner from './components/Banner'
import Nav from './components/Nav'
import SelectionSection from './components/SelectionSection';


const techDataPromise = async() =>{
    const res = await fetch('/public/data.json');
    const data = await res.json();
    return data;
}

function App() {

  return (
    <>
    <Nav />
    <Banner />
    <Suspense fallback={<p>Loading...</p>}>
      <SelectionSection techDataPromise={techDataPromise()} />
    </Suspense>
    </>
  )
}

export default App
