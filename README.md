## What is Bug Hunt?

Bug Hunt is a simple 'cookie clicker' game using React, React Three Fiber for 3-D rendering, Redux for game state, and Firebase to record highscores.
There are currently only two levels - after completing level 2, a 'You Win' 3-D text is rendered, along with the leaderboard, and an input field to let a user submit their score to the database.
Each level has its own background, which is a 360 HDRI photo, where the user can move their view angle via the mouse. They are tasked with earning points by clicking on different bugs that are randomly generated in position, rotation, and color. Upon a click, they rerender to another random spot.
There are currently only two levels, and a 'You Win' screen.

## How To Play
- Visit the [Live Website](https://bug-hunt.onrender.com/)
- OR:
  - clone the repo to your machine
  - via terminal: `npm i && npm run start`

## Known Issues

- Play again button does not restart the timer

### Credits

- Starting point - create-react-app

#### Backgrounds

- Raspberry Background Photo - https://www.pexels.com/photo/red-raspberries-975231/
- European City with Bridge Photo - https://polyhaven.com/a/tears_of_steel_bridge
- Pink Galaxy - https://www.dreamstime.com/illustration/galaxy-hdri.html
- Green Galaxy - https://wallpapersden.com/nebula-wallpaper/3840x2160/

#### Models

- Butterfly: https://www.turbosquid.com/3d-models/3d-butterfly-rigged-lowpoly-model-1723155#
- Fly: https://www.turbosquid.com/3d-models/free-blend-model-fly-likes-eat/594451
  - Matcap for Fly body: https://github.com/nidorx/matcaps
- JSON Robot Font - https://github.com/7dir/json-fonts

#### Demos and Guides that helped me immensely:

- Three.js Backgrounds and Skyboxes - https://r105.threejsfundamentals.org/threejs/lessons/threejs-backgrounds.html
- Convert HDRis to CubeMaps: https://matheowis.github.io/HDRI-to-CubeMap/
- firebase: https://www.youtube.com/watch?v=jCY6DH8F4oc
