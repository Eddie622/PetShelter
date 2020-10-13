import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const PetDetails = props => {
    const [name, setName] = useState("");
    const [pet_type, setPet_type] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkill_one] = useState("");
    const [skill_two, setSkill_two] = useState("");
    const [skill_three, setSkill_three] = useState("");
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setPet_type(res.data.pet_type);
                setDescription(res.data.description);
                setSkill_one(res.data.skill_one);
                setSkill_two(res.data.skill_two);
                setSkill_three(res.data.skill_three);
                setLikes(res.data.likes);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const remove = _id => {
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="card mb-3">
            <div className="card-header bg-primary text-light">
                Details about: {name}
                <button type="button" onClick={e => remove(props._id)} className="btn btn-danger float-right">Adopt {name}</button>
            </div>
            <div className="card-body">
                <p>Pet type: {pet_type}</p>
                <p>Description: {description}</p>
                <p>Skills: {skill_one} {skill_two} {skill_three}</p>
                <div>
                    Likes {likes}
                    <button type="button" onClick={() => setLikes(likes + 1)} className="btn btn-success ml-3">Like</button>
                </div>
            </div>
        </div>

    )
};

export default PetDetails;

