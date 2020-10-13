import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const PetForm = () => {
    const [name, setName] = useState("");
    const [pet_type, setPet_type] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkill_one] = useState("");
    const [skill_two, setSkill_two] = useState("");
    const [skill_three, setSkill_three] = useState("");
    const [errors, setErrors] = useState({});


    const CreatePet = e => {
        e.preventDefault();
        const petInput = {name, pet_type, description, skill_one, skill_two, skill_three};
        axios.post("http://localhost:8000/api/pet", petInput)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    };

    return (
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreatePet}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)}/>
                    { errors.name ? <p className="text-danger">{errors.name.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Pet Type</label>
                    <input type="text" className="form-control" onChange={e => setPet_type(e.target.value)}/>
                    { errors.pet_type ? <p className="text-danger">{errors.pet_type.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                    { errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Skill_one</label>
                    <input type="text" className="form-control" onChange={e => setSkill_one(e.target.value)}/>
                    { errors.skill_one ? <p className="text-danger">{errors.skill_one.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Skill_two</label>
                    <input type="text" className="form-control" onChange={e => setSkill_two(e.target.value)}/>
                    { errors.skill_two ? <p className="text-danger">{errors.skill_two.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Skill_three</label>
                    <input type="text" className="form-control" onChange={e => setSkill_three(e.target.value)}/>
                    { errors.skill_three ? <p className="text-danger">{errors.skill_three.properties.message}</p> : ""}
                </div>
                <input type="submit" className="btn btn-success btn-block" value="Add Pet"/>
            </form>    
        </div>
    )
};

export default PetForm;
