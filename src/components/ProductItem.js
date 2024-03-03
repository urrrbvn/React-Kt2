import React, {useState} from "react";

function ProductItem(props){
    const {id, name, price, count} = props

    const [counter, setCount] = useState(count)

    return(
        <div className='card' id={id}>
            <h1>{name}</h1>
            <p>{price}</p>
            <div className='counter'>
                <button onClick={()=>(counter !== 0) ? setCount(counter-1) : setCount(counter)} >-</button>
                <div>{counter}</div>
                <button onClick={()=>(counter < 25) ? setCount(counter+1) : setCount(counter)}>+</button>
            </div>
        </div>
    );
};

export default ProductItem