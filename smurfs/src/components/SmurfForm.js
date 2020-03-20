import React from "react";
import { useSelector } from "react-redux";

const SmurfForm = () => {
  const newSmurf = useSelector(state => state.newSmurf);

  return (
    <form>
      <label>
        Name:
        <input id="name" name="name" value={newSmurf.name} />
      </label>
      <label>
        Age:
        <input id="age" name="age" value={newSmurf.age} />
      </label>
      <label>
        Height
        <input id="height" name="height" value={newSmurf.height} />
      </label>
      <button type="submit">Add new smurf!</button>
    </form>
  );
};

export default SmurfForm;
