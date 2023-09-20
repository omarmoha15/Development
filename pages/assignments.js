import Multstep from '../components/aassignments/multstep'
import MultstepControl from '../components/aassignments/MultstepControl'

export default function assignments() {
    return (
<div className='md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white  '>
   <div className='conrainer horizontal mt-5'>

<Multstep/>
</div>
<MultstepControl/>


</div>

    );
  }
  