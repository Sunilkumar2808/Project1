import React, { useState, useCallback } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);


    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default ExampleComponent;
