import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id ) 
            .then(res => setPerson(res.data))
    }, [])
    return (
        <center>
                <p>{person.title} </p>
                <p>{person.price}</p>
                <p> {person.description}</p>
                <Link to={"/people/" + person._id + "/edit"}>
                    Edit
                </Link>
        </center>
    )
}