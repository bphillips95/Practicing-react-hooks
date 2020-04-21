import React, {useState} from 'react'

export default function Component() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}> Click Here</button>
        </div>
    )
}
