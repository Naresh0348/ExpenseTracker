import React, { useState } from 'react'
import Expform from '../Components/expform'

function Display() {
    const [add,setAdd] = useState([]);
    const handleadd =()=>{
        setAdd((prevAdd)=>[add,...prevAdd])
    }
    const total = add.reduce((a,c) => a + parseFloat(c.amount),0);
 return (
    <div>
    <Expform add={handleadd}/>
    <div>
        {add.map((add)=> (
            <div key={add.id}>
                <div>
                    <p>{add.expense}</p>
                    <p>{add.amount}</p>
                </div>
                </div>
                
        ))}
    </div>
    <h1>Total:{total}</h1>
    </div>
  )
}

export default Display;
