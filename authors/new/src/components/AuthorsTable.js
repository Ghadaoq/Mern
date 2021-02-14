import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"

const AuthorsTable = props => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllAuthors")
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])
    const navigateToNewRoute = () => {
        navigate("/new");
    }
    const { removeFromDom } = props;
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/' + id)
            .then(res => {
                removeFromDom(id)
            })
            navigate('/getAllAuthors/')
    }
    return(
        <div className="container">
            {authors.length > 0 && 
                authors.map((item,index)=>{
                    // return<div key={index}> {item.name} </div>
                    return <Link to={'/'+authors._id } > <p key={index}>{item.name}</p>
                 <button onClick={(e)=>{deleteAuthor(authors._id)}}>
                Delete
            </button>
            </Link>
                })
            }
            <input type='button' value='Add a new author' onClick={navigateToNewRoute}/>
        </div>
    )

}

export default AuthorsTable

