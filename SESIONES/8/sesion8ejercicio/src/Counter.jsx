// Ejercicio 1
// import React, { useEffect, useState } from 'react';
// const Counter = () => {
//     const [count, setCount] = useState(0);//detecta cambio de estado
//     useEffect(() => {//extrae del estado de react y lo pone en el dom
//         console.log(count);
//         document.title = count;
//     });
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>
//                 +
//             </button>
//             <button onClick={() => setCount(count - 1)}>
//                 -
//             </button>
//         </div>
//     );
// };
// export default Counter;

//Ejercicio 2
// import React, { useState } from 'react';
// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const addHandler = () => setCount(count + 1);
//     const subHandler = () => setCount(count - 1);
//     const overHandler = () => { console.log(count) };
//     return (
//         <div onMouseEnter={overHandler}>
//             <p>{count}</p>
//             <button onClick={addHandler}> + </button>
//             <button onClick={subHandler}> - </button>
//         </div>
//     );
// };
// export default Counter;
//Ejercicio 3
import React, { useState } from 'react';
const Counter = ({count, onAdd, onSub, onEnter, onLeave}) => {
return (
<div onMouseEnter={onEnter} onMouseLeave={onLeave}>
<p>{count}</p>
<button onClick={onAdd}> + </button>
<button onClick={onSub}> - </button>
</div>
);
};
export default Counter;