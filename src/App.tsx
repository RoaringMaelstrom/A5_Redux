import { Suspense } from 'react';

import Banner from './components/Banner'
import Nav from './components/Nav'
import SelectionSection from './components/SelectionSection';
import Footer from './components/Footer';
import Copyright from './components/Copyright';


const techDataPromise = async() =>{
    const res = await fetch('/public/data.json');
    const data = await res.json();
    return data;
}

const DataPromise = techDataPromise();

function App() {

  return (
    <>
    <Nav />
    <Banner />
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <SelectionSection techDataPromise={DataPromise} />
    </Suspense>
    <Footer />
    <Copyright />
    </>
  )
}

export default App
