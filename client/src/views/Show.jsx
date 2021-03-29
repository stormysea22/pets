import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, navigate } from '@reach/router';

const Show = props => {

    const [pet, setPet] = useState(false);
    const [showLike, setShowLike] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results[0]))
            .catch(err => console.log(err))
        setShowLike(true)
    }, [props])

    const handleDestroyPet = id => {
        Axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleLikePet = id => {
        pet.likes ++
        Axios.post(`http://localhost:8000/api/pets/${id}/like`)
            .then(res => {
                setShowLike(false);
            })
            .catch(err => console.log(err))
    }

    return (
        pet ?

            <div className="card col-4 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{pet.name}</h2>
                    <p className="card-text">Type: {pet.type}</p>
                    <p className="card-text">Description: {pet.description}</p>
                    <p className="card-text">Skill 1: {pet.skill1}</p>
                    <p className="card-text">Skill 2: {pet.skill2}</p>
                    <p className="card-text">Skill 3: {pet.skill3}</p>
                    <Link className="btn btn-warning btn-outline-info" to={`/edit/${props.id}`}>Edit</Link> <br /> <br />
                    {showLike ?
                        < button className="btn btn-success btn-outline-dark" onClick={() => handleLikePet(props.id)}> Like {pet.name}</button > :
                        < button className="btn btn-secondary btn-outline-dark" disabled> Like {pet.name}</button >
                    }

                    <p className="card-text">Likes: {pet.likes}</p>

                    <button className="btn btn-danger btn-outline-dark" onClick={() => handleDestroyPet(props.id)}>Adopt {pet.name}</button>
                </div>

            </div> : <h2>Loading...</h2>
    )
}

export default Show;