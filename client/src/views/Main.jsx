import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

const Main = props => {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets")
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }, [])


    const handleDestroyPet = id => {
        Axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }

    return (
        pet ?
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Pets</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pet.map((p, i) => {
                            return <tr key={i}>
                                <td>{p.name}</td>
                                <td>
                                    <Link className="btn btn-warning btn-outline-info" to={`/edit/${p._id}`}>Edit</Link>
                                    <button className="btn btn-danger btn-outline-dark" onClick={() => handleDestroyPet(p._id)}>Adopt</button>
                                    <Link className="btn btn-info btn-outline-dark" to={`/show/${p._id}`}>Display</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <h2>Loading...</h2>
    )
}

export default Main;