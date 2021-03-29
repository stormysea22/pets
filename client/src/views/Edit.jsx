import { useState, useEffect } from 'react';
import Axios from 'axios';
import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';

const Edit = props => {

    const [pet, setPet] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results[0]))
            .catch(err => console.log(err))
    }, [props])

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.put(`http://localhost:8000/api/pets/${props.id}`, pet)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors);
            })
    }

    return (
        <>
            {
                pet ?
                    <PetForm
                        inputs={pet}
                        title="Edit Pet"
                        submitValue="Update"
                        handleInputChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    /> : <h2>Loading...</h2>
            }
        </>
    )
}

export default Edit;