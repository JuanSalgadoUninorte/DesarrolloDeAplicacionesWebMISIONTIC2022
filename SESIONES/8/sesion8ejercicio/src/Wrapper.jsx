import React, { useState } from 'react';
import Counter from './Counter';
const Wrapper = () => {
    const [count, setCount] = useState(0);
    const onAdd = () => setCount(count + 1);
    const onSub = () => setCount(count - 1);
    const onEnter = () => { console.log('Entre a <Counter />'); };
    const onLeave = () => { console.log('Sali de <Counter />'); };
    return <Counter count={count} onAdd={onAdd} onSub={onSub} onEnter={onEnter}
        onLeave={onLeave} />;
};
export default Wrapper;