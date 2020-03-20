import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setData } from "../actions/smurfActions";

const SmurfList = () => {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch(setData(res.data));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {smurfs.map(e => {
        return (
          <div className="smurf-card">
            <p>Name: {e.name}</p>
            <p>Age: {e.age}</p>
            <p>Height: {e.height}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmurfList;
