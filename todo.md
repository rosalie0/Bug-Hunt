## models

- [ ] add spider to subtract points
- [x] add shadows/lighting to models so more realistic

## ideas for game

### audio

### additional fields for the game:

- [ ] adding a timer to each level
- [ ] add a timer for the whole game

### recording the score:

- [ ] have a local storage for 'your personal best'
- [ ] set up backend to allow a 'high scores' table, which, once a user completes the game, can ente 3 initials to record their entry in the table.

  - the model would look like:
    - name: STRING[3]
    - score: INT
    - time: TIME_IN_MILLISECONDS

#### firebase

- top 10

## advancing levels

- [ ] have an inbetween screen telling user they advanced to next level
  - have a button to start the next level
  - [ ] maybe display their score?
