import Employer from '../components/employer/emp_en'
import { Suspense } from 'react';

export default function employerDoc() {
  return (
    <Suspense fallback={<Loading />}>
<Employer/>
</Suspense>
  );
}


function Loading() {
  return <h2>🌀 Loading...</h2>;
}
