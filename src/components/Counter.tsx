import { useState } from 'react'
import classes from "./Counter.module.scss"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {

        setCounter(counter + 1)
    }

    return (
        <div>
            <button className={classes.btn} onClick={increment}>{counter}</button>
        </div>
    )
}

export default Counter