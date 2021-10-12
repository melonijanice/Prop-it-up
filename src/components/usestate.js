import React, { useState } from 'react';

const TestState = (props)=>{
    const [state, setState] = useState({
            items: [],
            totalPrice: 0.00
        });
        setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
        console.log(state.items);
        
        
return (
    <div>
        <h1>
            My name is {props.lastName},{props.firstName} 
        </h1>
    </div>
);
}
export default TestState;

