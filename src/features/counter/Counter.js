import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count ) //buradaki selector   "state.counter.count"

    const [amount, setAmount] = useState(0);

    const dispatch = useDispatch()
    //Redux store'daki state'in counter diliminden count değerini seçer ve bu değeri count değişkenine atar.
    // İşte bu şekilde, React bileşeniniz Redux store'daki count değeri ile güncellenir ve yeniden render edilir.


    const resetAll = () =>{
        setAmount(0);
        dispatch(reset());
    }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment()) }>+</button>
            <button onClick={() => dispatch(decrement()) }>-</button>
            <button onClick={() => resetAll() }>Reset</button>
            <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
            <button onClick={() => dispatch(incrementByAmount(Number(amount))) }>Add Amount</button>
        </div>
    </section>
  )
}

export default Counter