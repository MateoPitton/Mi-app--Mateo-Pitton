import { useState } from 'react';
function ItemCount({stock, initial, onAdd}) {

    const[count, setCount] = useState(initial);

    return(
        <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
            <br />
            <button>Agregar al carro</button>
        </div>
    )
}

export default ItemCount