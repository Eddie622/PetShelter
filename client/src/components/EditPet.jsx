import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditPet = props => {
    const [name, setName] = useState("");
    const [pet_type, setPet_type] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkill_one] = useState("");
    const [skill_two, setSkill_two] = useState("");
    const [skill_three, setSkill_three] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then( res => {
                console.log(res);
                setName(res.data.name);
                setPet_type(res.data.pet_type);
                setDescription(res.data.description);
                setSkill_one(res.data.skill_one);
                setSkill_two(res.data.skill_two);
                setSkill_three(res.data.skill_three);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdatePet = e => {
        e.preventDefault();
        const petInput = {name, pet_type, description, skill_one, skill_two, skill_three};
        axios.put(`http://localhost:8000/api/pet/${props._id}`, petInput)
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
            <form className="col-sm-8 offset-sm-2" onSubmit={UpdatePet}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name}/>
                    { errors.name ? <p className="text-danger">{errors.name.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Pet Type</label>
                    <input type="text" className="form-control" onChange={e => setPet_type(e.target.value)} value={pet_type}/>
                    { errors.pet_type ? <p className="text-danger">{errors.pet_type.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                    { errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Skill_one</label>
                    <input type="text" className="form-control" onChange={e => setSkill_one(e.target.value)} value={skill_one}/>
                    { errors.skill_one ? <p className="text-danger">{errors.skill_one.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Skill_two</label>
                    <input type="text" className="form-control" onChange={e => setSkill_two(e.target.value)} value={skill_two}/>
                    { errors.skill_two ? <p className="text-danger">{errors.skill_two.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Skill_three</label>
                    <input type="text" className="form-control" onChange={e => setSkill_three(e.target.value)} value={skill_three}/>
                    { errors.skill_three ? <p className="text-danger">{errors.skill_three.properties.message}</p> : ""}
                </div>
                <input type="submit" className="btn btn-success btn-block" value="Edit Pet"/>
            </form>    
        </div>
    )
};

export default EditPet;
