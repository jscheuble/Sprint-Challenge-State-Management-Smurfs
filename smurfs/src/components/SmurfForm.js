import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setData } from "../actions/smurfActions";

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    console.log(newSmurf);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log(res.data);
        dispatch(setData(res.data));
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          id="name"
          name="name"
          value={newSmurf.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          id="age"
          name="age"
          value={newSmurf.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Height
        <input
          id="height"
          name="height"
          value={newSmurf.height}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add new smurf!</button>
    </form>
  );
};

export default SmurfForm;
