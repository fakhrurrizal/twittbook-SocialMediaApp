import React, { useState, useEffect } from "react";

import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../config/UserRequest";

const FollowersCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [person, setPersons] = useState([]);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {person.map((person, id) => {
        if(person._id !== user._id){
          return <User person={person} key={id} />;
        }
      })}
      {/* {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default FollowersCard;
