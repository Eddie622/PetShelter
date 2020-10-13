import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetList from "./components/PetList";
import PetForm from './components/PetForm';
import { Link, Router } from '@reach/router';
import EditPet from './components/EditPet';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <div className="container">
      <h1>
        Pet Shelter
        <Link className="btn btn-info float-right mt-2" to="/">Home</Link>
      </h1>
      <Router className="my-5">
        <PetList path="/" />
        <PetForm path="/new" />
        <EditPet path="/edit/:_id" />
        <PetDetails path="/details/:_id" />
      </Router>
    </div>
  );
}

export default App;
