import React, { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1 className="mt-2 p-2 rounded-md w-full">
                {count}
            </h1>

            <button 
                onClick={() => setCount(count + 1)}
                className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
            >
                + 1
            </button>
        </div>
    )
}

export default Counter