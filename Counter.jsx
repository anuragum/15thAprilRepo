import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        Count - {count}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click</button>
    </div>
  )
}

export default Counter