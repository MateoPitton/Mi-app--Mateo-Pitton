import { useState } from 'react';
function ItemCount({stock, initial, onAdd}) {

    const[count, setCount] = useState(initial);

    function suma(){
        setCount(count +1)
    }
    function resta(){
        setCount(count -1)
    }
    
    return(
        <div>
            <button onClick={resta}>-</button>
            <span>0</span>
            <button onClick={suma}>+</button>
            <br />
            <button>Agregar al carro</button>
        </div>
    )
}

export default ItemCount