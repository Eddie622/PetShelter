import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const PetList = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                console.log(res);
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Link className="btn btn-info float-right" to="/new">New Pet</Link>
            <h3>These pets are looking for a good home</h3>
            <table className="table table-hover table-bordered">
                <thead className="bg-primary text-white" >
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) =>
                        <tr key={pet._id}>
                            <td>{pet.name}</td>
                            <td>{pet.pet_type}</td>
                            <td><Link to={`/details/${pet._id}`}>Details</Link> | <Link to={`/edit/${pet._id}`}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default PetList;
