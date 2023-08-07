import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.tsx';
import './styles/commonStyles.css';
import React, { useEffect, useState } from 'react';
import Inputt from './inputt.tsx';

function App() {
  //   // const [value, setValue] = useState();
  //   const [values, setValues] = useState(
  //     {
  //       fistname: '',
  //       lastname: '',
  //       position: '',
  //     }
  //   );
  //   const arr = ['firstname', 'lastname', 'position']

  //   const handler = ({ name, value }: any) => {
  //     // setValue(event.target.value)
  //     console.log(name);

  //     setValues({ ...values, [name]: value })
  //   }

  //   useEffect(() => {
  //     console.log(values);
  //   }, [values])
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
  //       <div>
  //         {arr.map((item: any) => {
  //           return (
  //             <Inputt
  //               varName={item}
  //               abc={handler}
  //               key={item}
  //             />
  //           )
  //         })}
  //       </div>


  //   );
}

export default App;
