import React from 'react';

function Person(props) {
    if (!props.Person) {
        return null;
    }

    return (
        <div>
            <h2>Random Person Details</h2>
            <ul>
                <li>First Name: {props.Person.name.first}</li>
                <li>Last Name: {props.Person.name.last}</li>
                <li>Email: {props.Person.email}</li>
            </ul>
        </div>
    );
}

export default Person;
