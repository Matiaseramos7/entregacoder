import { useState } from 'react'
import Button from '../Button/Button'
import reloj1 from '../Item/img/reloj_1.jpg'
const Counter = () => {
    const [count, setCount] = useState(0)


    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < 5) {
            setCount(prev => prev + 1)
        }
    }
   
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={reloj1} alt="reloj"></img>
            <h1>{count}</h1>
            <div className='flex flex-row justify-center items-center'>
                <Button callback={decrement} label={'Quitar'}/>
                <Button callback={increment} label={'Agregar'}/>
            </div>
           
        </div>
    )
}

export default Counter