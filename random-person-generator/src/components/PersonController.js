import React, { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
    const [person, setPerson] = useState(null);

    const getPerson = async () => {
        try {
            const response = await fetch('https://www.randomuser.me/api?results=1');
            const data = await response.json();
            setPerson(data.results[0]);
        } catch (error) {
            console.error('Error fetching person data:', error);
        }
    };

    useEffect(() => {
        getPerson();
    }, []);

    return <Person Person={person}></Person>
}

export default PersonController;
