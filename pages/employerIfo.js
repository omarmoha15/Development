import About from '../components/profile/About';
import { Suspense } from 'react';


export default function employerIfo() {
  return (


<Suspense fallback={<Loading />}>
      <About/>
      </Suspense>

  );
}


function Loading() {
  return <h2>🌀 Loading...</h2>;
}
