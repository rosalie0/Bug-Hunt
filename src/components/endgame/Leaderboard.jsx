import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import Loading from "../Loading";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Leaderboard({ db }) {
  const { timeInSeconds } = useSelector((state) => state.timer);
  let [leaderboard, setLeaderboard] = useState([]);

  // Async function to retrieve highscores from DB
  async function getLeaderboard(db) {
    const leaderboardCollection = collection(db, "leaderboard");
    const leaderboardSnapshot = await getDocs(leaderboardCollection);
    const data = leaderboardSnapshot.docs.map((doc) => doc.data());
    setLeaderboard(data); // update our state
  }

  useEffect(() => {
    getLeaderboard(db);
  }, []);

  const submitHandler = () => {
    //
  };

  // If we haven't gotten the data back yet, give them a Loading component.
  if (leaderboard.length === 0) return <Loading />;

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const tableStyles = {
    border: "1px solid tomato",
    padding: 3,
  };
  return (
    <div style={containerStyles}>
      <h2>Leaderboard:</h2>
      <table style={tableStyles}>
        <th>Name</th>
        <th>Time</th>

        {leaderboard.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.time}</td>
          </tr>
        ))}
      </table>

      <div>
        <h4>Save your time to leaderboard?</h4>
        <h5>Your time: {timeInSeconds} seconds</h5>
        <input placeholder="Name..." />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default Leaderboard;
