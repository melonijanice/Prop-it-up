// Here we create the Header Component that will receive props and we know we want to have a users
//     first and last name
import React from 'react';
    
const Person = (props) => {
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
            <p>Age:{props.age}</p>
            <p>Hair Color:{props.hairColor}</p>

        </div>
    );
}
export default Person;

