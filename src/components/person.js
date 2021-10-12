// Here we create the Header Component that will receive props and we know we want to have a users
//     first and last name
import React, { useState } from 'react';
    
const Person = (props) => {
    const [state, setState] = useState({
        age: parseInt(props.age)
    });
    const handleClick = () => {
        setState({                   // the setter will update the value held in state
            age: state.age + 1
        });
    }
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    return (
        <div>
            <h1>
                My name is {props.lastName},{props.firstName} 
            </h1>
            <p>Age:{state.age}</p>
            <p>Hair Color:{props.hairColor}</p>
            <button onClick={ handleClick }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default Person;

