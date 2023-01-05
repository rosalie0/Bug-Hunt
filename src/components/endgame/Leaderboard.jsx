import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

import Loading from "../Loading";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Leaderboard({ db }) {
  const leaderboardCollection = collection(db, "leaderboard");
  const { timeInSeconds } = useSelector((state) => state.timer);
  const [leaderboard, setLeaderboard] = useState([]);
  const [newName, setNewName] = useState("");

  // Async function to retrieve highscores from DB
  async function getLeaderboard() {
    // Fetch data from our collection
    const leaderboardSnapshot = await getDocs(leaderboardCollection);

    // If you just do `doc.data()` instead of `{ ...doc.data(), id: doc.id }`
    // You won't get the ids.
    const data = leaderboardSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setLeaderboard(data); // update our state
  }

  // On first render, fetch data.
  useEffect(() => {
    getLeaderboard();
  }, []);

  const submitHandler = async () => {
    const objectToSubmit = {
      name: newName,
      time: timeInSeconds,
    };
    // 'POST' to the firebase collection
    await addDoc(leaderboardCollection, objectToSubmit);

    // Refetch so it displays
    await getLeaderboard();
  };

  // If we haven't gotten the data back yet, give them a Loading component.
  if (leaderboard.length === 0) return <Loading />;

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
    padding: 5,
  };
  const tableStyles = {
    border: "1px solid tomato",
    padding: 3,
    margin: 5,
  };

  return (
    <div style={containerStyles}>
      <table style={tableStyles}>
        <caption>Leaderboard</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h4>Save your time to leaderboard?</h4>
        <h5>Your time: {timeInSeconds} seconds</h5>
        <input
          placeholder="Name..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default Leaderboard;
