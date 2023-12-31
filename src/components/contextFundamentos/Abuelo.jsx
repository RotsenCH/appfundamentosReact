        /* CON USO DEL CONTEXT */
import Padre from './Padre'

const Abuelo = () => {
    return (
        <div className='flex justify-between h-full'>
            <p>C. Abuelo</p>
            <div className='bg-indigo-100 w-3/5 h-full border-2 border-slate-800'>
                <Padre />
            </div>
        </div>
    )
}
export default Abuelo


        /* SIN USO DEL CONTEXT */
// import { useState } from 'react'
// import Padre from './Padre'

// const Abuelo = () => 
// {

//   const [Objdinero, setObjDinero] = useState({
//     detalle:"Play Station",
//     dinero:500
//   })

//   return (
//     <div className='flex justify-between h-full'>
//       <p>C. Abuelo</p>
//       <pre>{JSON.stringify(Objdinero,null,1)}</pre>
//       <div className='bg-indigo-100 w-3/5 h-full border-2 border-slate-800'>
//         <Padre Objdinero={Objdinero} setObjDinero={setObjDinero}/>
//       </div>
//     </div>
//   )
// }

// export default Abuelo