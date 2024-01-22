import React, { useState } from 'react';

export default function PureComponent() {
    const [counter, setCounter] = useState(0);
    const [outsideCounter, setOutsideCounter] = useState(0);

    function increment() {
        setOutsideCounter(outsideCounter + 1);
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>Counter: {counter}</p>
            <p>Outside Counter: {outsideCounter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
