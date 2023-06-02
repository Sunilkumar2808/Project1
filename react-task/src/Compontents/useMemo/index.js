import React, { useState, useMemo } from 'react';

function ExampleComponents() {
    const [count, setCount] = useState(0);

    const expensiveValue = useMemo(() => {

        return count * 2;
    }, [count]);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default ExampleComponent