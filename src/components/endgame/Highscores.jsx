import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import Loading from "../Loading";

// eslint-disable-next-line react/prop-types
function Highscores({ db }) {
  // Async function to retrieve highscores from DB
  async function getHighscores(db) {
    const highscoresCol = collection(db, "highscores");
    const highscoresSnapshot = await getDocs(highscoresCol);
    const highscoresList = highscoresSnapshot.docs.map((doc) => doc.data());
    console.log("highscores from Database await func:", highscoresList);
    setHighscores(highscoresList);
  }

  let [highscores, setHighscores] = useState([]);
  useEffect(() => {
    getHighscores(db);
  }, []);

  console.log(highscores);

  // const highscoresRef = firestore.collection("highscores"); // get info from our collection/database
  // // query it (and order it by top 5 scores)
  // const query = highscoresRef.orderBy("points").limit(5);

  // // listen to data with a hook - this is an array of the objects we made in the firebase collection
  // const [highscores] = useCollectionData(query, { idField: "id" });

  // If we haven't gotten the data back yet, give them a Loading component.
  if (highscores.length === 0) return <Loading />;

  return (
    <div>
      <h4>Highscores:</h4>
      <ul>
        {highscores.map((highscore) => {
          console.log(highscore);
          return (
            <li key={highscore.id}>
              {highscore.name} scored a total of {highscore.points}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Highscores;
